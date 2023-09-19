import Form from "react-bootstrap/Form"

import useFile from "hooks/useFile"

import "./ConversationPanel.scss"

const ConversationPanel = () => {
  const fileContent = useFile()

  return (
    <div className="conversation-panel">
      <div className="left-col">Left Column</div>
      <div className="right-col m-2">
        <Form.Control
          as="textarea"
          defaultValue={fileContent}
          disabled
          className="h-100"
        />
      </div>
    </div>
  )
}

export default ConversationPanel