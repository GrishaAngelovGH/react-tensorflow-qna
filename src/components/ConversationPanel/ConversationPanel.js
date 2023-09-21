import { useState } from "react"
import useFile from "hooks/useFile"

import Form from "react-bootstrap/Form"
import InteractivePanel from "./InteractivePanel"

import "./ConversationPanel.scss"

const ConversationPanel = () => {
  const [showSidebar, setShowSidebar] = useState(true)
  const fileContent = useFile()

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className="conversation-panel">
      <div className="left-col">
        <InteractivePanel onToggleSidebar={handleToggleSidebar} />
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