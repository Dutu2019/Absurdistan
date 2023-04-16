import React from "react";
import "./Map.css";
import map from "../../img/map.jpg";

export default function Map() {
  return (
    <div className="Map">
      <section className="mapImg">
        <img src={map} alt="World Map" />
      </section>
    </div>
  );
}
