const Conversation = ({ question, answers }) => {
  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-10 border rounded p-2">
        <h3 className="bg-primary text-white p-1 rounded">Question: {question}</h3>
        <h3 className="bg-secondary text-white p-1 rounded">
          {answers.length > 0 ? `Answer: ${answers[0]?.text}` : 'Could not find the answer for this question'}
        </h3>
      </div>
    </div>
  )
}

export default Conversation