import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <div className="main">
          <Sidebar />
          <Map />
      </div>
    </div>
  );
}

export default App;
