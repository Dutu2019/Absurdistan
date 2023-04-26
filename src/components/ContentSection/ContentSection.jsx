import React, { useState, useEffect, useContext, useRef } from "react";
import "./ContentSection.css";
import { ActiveContext } from "../../contexts/Active";

export default function ContentSection(props) {
  const activeContext = useContext(ActiveContext);
  const sectionId = props.sectionId;
  const id = props.id;
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (isVisible && !(id > 0 && id < 6)) {
      activeContext.setActive(id);
    }
  }, [isVisible]);

  return (
    <div className="ContentSection" id={sectionId || id} ref={ref}>
      {props.children}
    </div>
  );
}

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
