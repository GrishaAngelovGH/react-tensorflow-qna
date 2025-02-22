const Answer = ({ content }) => (
  <h3 className="bg-success text-white p-1 rounded text-capitalize">
    <i className="bi bi-info-circle mx-2"></i>
    {content ? content.text : 'Could not find the answer for this question'}
  </h3>
)

export default Answer