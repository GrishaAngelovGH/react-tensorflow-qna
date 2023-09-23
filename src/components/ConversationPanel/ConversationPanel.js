import { useState } from "react"
import useFile from "hooks/useFile"
import useProcessQuestion from "hooks/useProcessQuestion"

import Form from "react-bootstrap/Form"
import InteractivePanel from "./InteractivePanel"
import Conversation from "./Conversation"

import "./ConversationPanel.scss"

const ConversationPanel = () => {
  const [showSidebar, setShowSidebar] = useState(true)
  const [question, setQuestion] = useState('')
  const fileContent = useFile()
  const [answers, isProcessing] = useProcessQuestion(question, fileContent)

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className="conversation-panel">
      <div className="left-col">
        {
          question.length > 0 && (
            <Conversation question={question} answers={answers} isProcessing={isProcessing} />
          )
        }

        <InteractivePanel
          onSendQuestion={setQuestion}
          onToggleSidebar={handleToggleSidebar}
        />
      </div>
      {
        showSidebar && (
          <div className="right-col m-2">
            <Form.Control
              as="textarea"
              defaultValue={fileContent}
              disabled
              className="h-100"
            />
          </div>
        )
      }
    </div>
  )
}

export default ConversationPanel