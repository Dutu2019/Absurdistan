import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Active from "./contexts/Active";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <Active>
        <div className="main">
          <Sidebar />
          <Content />
        </div>
      </Active>
    </div>
  );
}

export default App;
