import React, { useState } from "react";
import "./Ping.css";
import ping from "../../img/ping.png";

export default function Ping(props) {
  const [active, setActive] = useState(true);
  const style = { top: props.top, left: props.left };

  const handleClick = () => {
    setActive(!active);
    console.log("yes");
  };

  return (
    <div className="Ping" style={style} onClick={handleClick}>
      <img src={ping} alt="" className="ping" />
      {active && <div className="textbox">{props.children}</div>}
    </div>
  );
}
