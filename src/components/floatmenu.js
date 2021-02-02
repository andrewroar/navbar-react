import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import "./floatmenu.css";

export default function Floatmenu(props, { in: inProp }) {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };

  /*Transition 
  

  
  */

  return (
    <li
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleHover}
      className={hover ? "nav-li hover-background" : "nav-li"}
    >
      {props.title}
      <CSSTransition in={hover} classNames="fade" timeout="200" unmountOnExit>
        <div className="about-floatbox">{props.children}</div>
      </CSSTransition>
    </li>
  );
}
