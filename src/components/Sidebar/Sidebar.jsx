import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="title">Absurdistan</div>
      <div className="sections">
        <div className="section">Introduction</div>
        <div className="section">Endroit 1</div>
        <div className="section">Endroit 2</div>
        <div className="section">Eugene Ionesco</div>
        <div className="section">Boris Vian</div>
        <div className="section">Albert Camus</div>
        <div className="section">Conseil 1</div>
        <div className="section">Conseil 2</div>
        <div className="section">Conseil 3</div>
      </div>
    </div>
  );
}
