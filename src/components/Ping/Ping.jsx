import React, { useContext, useState } from "react";
import "./Ping.css";
import ping from "../../img/ping.png";
import { ActiveContext } from "../../contexts/Active";

export default function Ping(props) {
  const activeContext = useContext(ActiveContext);
  const [active, setActive] = useState(true);
  const style = { top: props.top, left: props.left };

  const handleClick = () => {
    setActive(!active);
    console.log(activeContext);
  };

  return (
    <div className="Ping" style={style} onClick={handleClick}>
      <img src={ping} alt="" className="ping" />
      {active && <div className="textbox">{props.children}</div>}
    </div>
  );
}
