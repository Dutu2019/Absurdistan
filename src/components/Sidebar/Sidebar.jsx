import React from "react";
import "./Sidebar.css";
import SideSection from "../SideSection/SideSection";

export default function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="title">Absurdistan</div>
        <div className="sections">
          <SideSection className="section" id="0">
            Introduction
          </SideSection>
          <SideSection className="section" id="1">
            Endroit 1
          </SideSection>
          <SideSection className="section" id="2">
            Endroit 2
          </SideSection>
          <SideSection className="section" id="3">
            Eugene Ionesco
          </SideSection>
          <SideSection className="section" id="4">
            Boris Vian
          </SideSection>
          <SideSection className="section" id="5">
            Albert Camus
          </SideSection>
          <SideSection className="section" id="6">
            Conseil 1
          </SideSection>
          <SideSection className="section" id="7">
            Conseil 2
          </SideSection>
          <SideSection className="section" id="8">
            Conseil 3
          </SideSection>
        </div>
    </div>
  );
}
