import React, { useEffect, useRef, useState } from "react";
import "./Map.css";
import map from "../../img/map.jpg";
import Ping from "../../components/Ping/Ping";

export default function Map() {
  const [positions, setPositions] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 1300) {
      setPositions(["40%", "50%"]);
    } else {
      setPositions(["45%", "51.5%"]);
    }
  }, [windowWidth]);

  return (
    <div className="Map">
      <img src={map} alt="World Map" id="mapImg" className="Img" />
      <Ping top={positions[0]} left={positions[1]} id="1">
        Helo
      </Ping>
    </div>
  );
}
