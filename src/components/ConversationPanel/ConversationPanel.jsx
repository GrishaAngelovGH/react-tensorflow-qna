import { useState } from "react"

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

  const fileContent = useFile()
  const [answer, isProcessing] = useProcessQuestion(question, fileContent)

  const handleToggleFileContent = () => {
    setShowFileContent(!showFileContent)
    setShowQuestions(false)
  }

  const handleToggleQuestions = () => {
    setShowQuestions(!showQuestions)
    setShowFileContent(false)
  }

  return (
    <div className="conversation-panel">
      <div className="left-col">
        {
          question.length > 0 && (
            <Conversation question={question} answer={answer} isProcessing={isProcessing} />
          )
        }

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