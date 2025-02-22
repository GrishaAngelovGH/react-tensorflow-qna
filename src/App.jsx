import Navbar from "components/Navbar"
import ConversationPanel from "components/ConversationPanel"

function App() {
  return (
    <div className="row g-0">
      <div className="col-md-12">
        <Navbar />
        <ConversationPanel />
      </div>
    </div>
  );
}

export default App;
