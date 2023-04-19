import React, { createContext, useState } from "react";

export const ActiveContext = createContext();
export default function Active(props) {
  const [active, setActive] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {props.children}
    </ActiveContext.Provider>
  );
}
