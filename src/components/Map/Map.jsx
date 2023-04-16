import React from "react";
import "./Map.css";
import map from "../../img/map.jpg";
import Ping from "../../components/Ping/Ping"

export default function Map() {
  return (
    <div className="Map">
      <img src={map} alt="World Map" id="mapImg" className="Img" />
      <Ping top={"40%"} left={"50%"}>
        Helo
      </Ping>
    </div>
  );
}
