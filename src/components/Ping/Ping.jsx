import React, { useContext, useState } from "react";
import "./Ping.css";
import ping from "../../img/ping.png";
import { ActiveContext } from "../../contexts/Active";

export default function Ping(props) {
  const id = props.id;
  const activeContext = useContext(ActiveContext);
  const [active, setActive] = useState(activeContext.id);
  const style = { top: props.top, left: props.left };

  const handleClick = () => {};

  return (
    <div className="Ping" style={style} onClick={handleClick}>
      <img src={ping} alt="" className="ping" />
      {active && <div className="textbox">{props.children}</div>}
    </div>
  );
}
