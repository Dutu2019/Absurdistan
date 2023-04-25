import React, { useContext, useEffect } from "react";
import "./SideSection.css";
import { ActiveContext } from "../../contexts/Active";

export default function SideSection(props) {
  const id = props.id;
  const sectionID = props.section
  const activeContext = useContext(ActiveContext);
  const handleClick = () => {
    activeContext.setActive(id);
  };

  const section = (
    <a href={`#${sectionID}`} onClick={handleClick}>
      <div className={`SideSection ${activeContext.active === id && "active"}`}>
        {props.children}
      </div>
    </a>
  );
  return section;
}
