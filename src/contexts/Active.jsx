import React, { createContext, useState } from "react";

export const ActiveContext = createContext();
export default function Active(props) {
  const [active, setActive] = useState([]);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {props.children}
    </ActiveContext.Provider>
  );
}
