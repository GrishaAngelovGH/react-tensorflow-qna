import Question from "./Question"
import Answer from "./Answer"

const Conversation = ({ question, answer, isProcessing }) => (
  <div className="row justify-content-center mt-3">
    <div className="col-8 col-md-10 border rounded p-2">
      <Question content={question} />

      {
        isProcessing && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
      }
      {
        !isProcessing && (<Answer content={answer} />)
      }
    </div>
  </div>
)

export default Conversation