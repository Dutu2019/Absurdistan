import React, { useContext, useEffect, useState } from "react";
import "./Ping.css";
import ping from "../../img/ping.png";
import { ActiveContext } from "../../contexts/Active";

export default function Ping(props) {
  const id = props.id;
  const activeContext = useContext(ActiveContext);
  const [active, setActive] = useState(false);
  const style = { top: props.top, left: props.left };

  useEffect(() => {
    if (activeContext.active === id) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeContext.active]);

  const handleClick = () => {
    if (active) {
      activeContext.setActive();
    } else {
      activeContext.setActive(id);
    }
  };

  return (
    <div className="Ping" style={style} onClick={handleClick}>
      <img src={ping} alt="" className="ping" />
      {active && <div className="textbox">{props.children}</div>}
    </div>
  );
}
