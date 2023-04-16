import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Map from "./components/Map/Map";
import Active from "./contexts/Active";

function App() {
  return (
    <div className="App">
      <Active>
        <div className="main">
          <Sidebar />
          <Map />
        </div>
      </Active>
    </div>
  );
}

export default App;
