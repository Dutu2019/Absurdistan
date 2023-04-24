import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Active from "./contexts/Active";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <Active>
        <div className="container">
          <div className="bgImg"></div>
          <div className="main">
            <Sidebar />
            <Content />
          </div>
        </div>
      </Active>
    </div>
  );
}

export default App;
