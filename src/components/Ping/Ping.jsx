import React, { useContext, useEffect, useState } from "react";
import "./Ping.css";
import ping from "../../img/ping.png";
import { ActiveContext } from "../../contexts/Active";

export default function Ping(props) {
  const id = props.id;
  const activeContext = useContext(ActiveContext);
  const [active, setActive] = useState(false);
  const style = { top: props.top, left: props.left };

  // For the content
  const title = props.title;
  const img = props.img;

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

  const textbox = (
    <div className="container">
      <div className="pingBg pingColor"></div>
      <div
        className="pingBg pingImg"
        style={{ backgroundImage: `url(${img})`,  }}
      ></div>
      <div className="textbox">
        <div className="title">{title}</div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );

  return (
    <div className="Ping" style={style} onClick={handleClick}>
      <img src={ping} alt="" className="ping" />
      {active && textbox}
    </div>
  );
}
