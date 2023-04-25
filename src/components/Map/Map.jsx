import React, { useContext, useEffect, useState } from "react";
import "./Map.css";
import map from "../../img/map.jpg";
import Ping from "../../components/Ping/Ping";
import { ActiveContext } from "../../contexts/Active";

export default function Map(props) {
  const [positions, setPositions] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const activeContext = useContext(ActiveContext);
  const id = props.id;

  // Ping displacement temp fix
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
      setPositions([
        "40%",
        "50%",
        "55%",
        "78%",
        "36%",
        "39%",
        "15%",
        "58%",
        "0%",
        "57%",
      ]);
    } else {
      setPositions([
        "45%",
        "51.5%",
        "60%",
        "79.5%",
        "41%",
        "40.5%",
        "20%",
        "59.5%",
        "5%",
        "58.5%",
      ]);
    }
  }, [windowWidth]);

  return (
    <div className="Map" id={id}>
      <img src={map} alt="World Map" id="mapImg" className="Img" />
      <Ping top={positions[0]} left={positions[1]} id="1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptas
        alias nostrum dolore est. Accusantium excepturi nam doloremque aliquam
        quis culpa quia debitis in? Veritatis fugit tempora quisquam reiciendis
        delectus.
      </Ping>
      <Ping top={positions[2]} left={positions[3]} id="2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptas
        alias nostrum dolore est. Accusantium excepturi nam doloremque aliquam
        quis culpa quia debitis in? Veritatis fugit tempora quisquam reiciendis
        delectus.
      </Ping>
      <Ping top={positions[4]} left={positions[5]} id="3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptas
        alias nostrum dolore est. Accusantium excepturi nam doloremque aliquam
        quis culpa quia debitis in? Veritatis fugit tempora quisquam reiciendis
        delectus.
      </Ping>
      <Ping top={positions[6]} left={positions[7]} id="4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptas
        alias nostrum dolore est. Accusantium excepturi nam doloremque aliquam
        quis culpa quia debitis in? Veritatis fugit tempora quisquam reiciendis
        delectus.
      </Ping>
      <Ping top={positions[8]} left={positions[9]} id="5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptas
        alias nostrum dolore est. Accusantium excepturi nam doloremque aliquam
        quis culpa quia debitis in? Veritatis fugit tempora quisquam reiciendis
        delectus.
      </Ping>
    </div>
  );
}
