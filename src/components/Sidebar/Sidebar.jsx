import React from "react";
import "./Sidebar.css";
import SideSection from "../SideSection/SideSection";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="title">Absurdistan</div>
      <div className="sections">
        <SideSection className="section" section="0" id="0">
          Introduction
        </SideSection>
        <SideSection section="1" id="1">
          Endroit 1
        </SideSection>
        <SideSection section="1" id="2">
          Endroit 2
        </SideSection>
        <SideSection section="1" id="3">
          Eugene Ionesco
        </SideSection>
        <SideSection section="1" id="4">
          Boris Vian
        </SideSection>
        <SideSection section="1" id="5">
          Albert Camus
        </SideSection>
        <SideSection section="2" id="6">
          Conseil 1
        </SideSection>
        <SideSection section="3" id="7">
          Conseil 2
        </SideSection>
        <SideSection section="4" id="8">
          Conseil 3
        </SideSection>
      </div>
    </div>
  );
}
