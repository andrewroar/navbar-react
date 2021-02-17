import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import "./floatmenu.css";

export default function Floatmenu(props, { in: inProp }) {
  const [hover, setHover] = useState(false);
  const [smallscreen, setSmallscree] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };

  /*Transition */

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setSmallscree(true);
    } else {
      setSmallscree(false);
    }
  };
  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <li
      onMouseEnter={smallscreen ? null : handleHover}
      onMouseLeave={smallscreen ? null : handleHover}
      onClick={smallscreen ? handleHover : null}
      className={hover ? "nav-li hover-background" : "nav-li"}
    >
      {props.title}

      <CSSTransition in={hover} classNames="fade" timeout="200" unmountOnExit>
        <div
          className={
            smallscreen
              ? "about-floatbox position-relative"
              : "about-floatbox position-absolute background-colour-fade-grey "
          }
        >
          {props.children}
        </div>
      </CSSTransition>
    </li>
  );
}
