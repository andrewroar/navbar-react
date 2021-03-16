import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import onClickOutside from "react-onclickoutside";

import "./floatmenu.css";

export default function Floatmenu(props, { in: inProp }) {
  const [hover, setHover] = useState(false);
  const [smallscreen, setSmallscree] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };

  const handleOpen = () => {
    setHover(true);
  };

  const handleClose = () => {
    setHover(false);
  };
  const handleClickOutside = () => {
    setHover(false);
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div onBlur={smallscreen ? handleClose : null}>
      <li
        onMouseEnter={smallscreen ? null : handleHover}
        onMouseLeave={smallscreen ? handleHover : handleHover}
        onClick={smallscreen ? handleOpen : null}
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
    </div>
  );
}
