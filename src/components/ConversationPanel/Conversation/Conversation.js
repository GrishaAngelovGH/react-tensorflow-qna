import Question from "./Question"

const Conversation = ({ question, answers, isProcessing }) => {
  return (
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
          !isProcessing && (
            <h3 className="bg-secondary text-white p-1 rounded">
              {answers.length > 0 ? `Answer: ${answers[0]?.text}` : 'Could not find the answer for this question'}
            </h3>
          )
        }
      </div>
    </div>
  )
}

export default Conversation