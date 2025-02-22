import { useState, useEffect, useRef } from "react"

import useFile from "hooks/useFile"
import useProcessQuestion from "hooks/useProcessQuestion"

import Form from "react-bootstrap/Form"
import Conversation from "./Conversation"
import InteractivePanel from "./InteractivePanel"
import Questions from "./Questions"

import "./ConversationPanel.scss"

const ConversationPanel = () => {
  const [showFileContent, setShowFileContent] = useState(true)
  const [showQuestions, setShowQuestions] = useState(false)
  const [question, setQuestion] = useState('')
  const [conversation, setConversation] = useState([])

  const fileContent = useFile()
  const [answer, isProcessing, clearAnswer] = useProcessQuestion(question, fileContent)

  const scrollRef = useRef()

  const handleToggleFileContent = () => {
    setShowFileContent(!showFileContent)
    setShowQuestions(false)
  }

  const handleToggleQuestions = () => {
    setShowQuestions(!showQuestions)
    setShowFileContent(false)
  }

  useEffect(() => {
    if (answer?.text) {
      setConversation([
        ...conversation,
        { id: conversation.length + 1, question, answer, isProcessing }
      ])
      clearAnswer()
      scrollRef?.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [conversation, question, answer, isProcessing, clearAnswer])

  useEffect(() => {
    isProcessing && scrollRef?.current?.scrollIntoView({ behavior: "smooth" })
  }, [isProcessing])

  return (
    <div className="conversation-panel">
      <div className="left-col">
        <div className="conversation overflow-auto">
          {
            conversation.map(v => (
              <Conversation key={v.id} ref={scrollRef} {...v} />
            ))
          }
          {
            question.length > 0 && isProcessing && (
              <Conversation ref={scrollRef} question={question} answer={answer} isProcessing={isProcessing} />
            )
          }
        </div>

        <InteractivePanel
          onSendQuestion={setQuestion}
          onToggleFileContent={handleToggleFileContent}
          onToggleQuestions={handleToggleQuestions}
        />
      </div>

      <div className="right-col m-2">
        {
          showFileContent && (
            <Form.Control
              as="textarea"
              defaultValue={fileContent}
              disabled
              className="h-100"
            />
          )
        }
        {
          showQuestions && (
            <Questions onClick={setQuestion} />
          )
        }
      </div>
    </div>
  )
}

export default ConversationPanel