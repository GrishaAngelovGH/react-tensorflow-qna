import ListGroup from "react-bootstrap/ListGroup"

const questions = [
  "Which is the capital of the UK?",
  "What is the population of London?",
  "What is the area covered by London?",
  "How many boroughs does London have?",
  "What landmarks does London have?",
  "What climate does London have?",
  "How many languages are spoken in London?",
  "How about the infrastructure?",
  "What is the rail transport also known as?",
  "As a global financial center, what is it home to?"
]

const Questions = ({ onClick }) => (
  <ListGroup>
    {
      questions.map((v, i) => (
        <ListGroup.Item key={i} action onClick={() => { onClick(v) }}>
          {v}
        </ListGroup.Item>
      ))
    }
  </ListGroup>
)

export default Questions