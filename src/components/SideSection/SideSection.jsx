import React, { useContext, useEffect } from "react";
import "./SideSection.css";
import { ActiveContext } from "../../contexts/Active";

export default function SideSection(props) {
  const id = props.id;
  const activeContext = useContext(ActiveContext);
  const handleClick = () => {
    activeContext.setActive(id);
  };

  const section = (
    <div
      className={`SideSection ${activeContext.active === id && "active"}`}
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
  return section;
}
