import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
