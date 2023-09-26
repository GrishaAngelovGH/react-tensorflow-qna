import { useState } from "react"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import ButtonGroup from "react-bootstrap/ButtonGroup"

const InteractivePanel = ({ onToggleFileContent, onToggleQuestions, onSendQuestion }) => {
  const [value, setValue] = useState('')

  const handleInputChange = ({ target }) => {
    setValue(target.value)
  }

  const handleSend = () => {
    onSendQuestion(value)
    setValue("")
  }

  return (
    <div className="row justify-content-center fixed-bottom ps-2">
      <div className="col-8 col-md-4 col-lg-5">
        <InputGroup className="mb-3">
          <Form.Control
            value={value}
            placeholder="Ask a question"
            className="border-primary"
            onChange={handleInputChange}
          />
          <Button variant="primary bi bi-send" onClick={handleSend}></Button>
        </InputGroup>
      </div>
      <div className="col-8 col-md-3 col-lg-5">
        <ButtonGroup>
          <Button
            variant="outline-success bi bi-layout-sidebar-reverse"
            onClick={onToggleFileContent}>
          </Button>
          <Button
            variant="outline-success bi bi-list"
            onClick={onToggleQuestions}>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default InteractivePanel