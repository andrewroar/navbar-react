import "./navbar.css";
import { CSSTransition } from "react-transition-group";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes, FaAlignJustify } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Floatmenu from "./floatmenu";
import Aboutus from "./aboutus";
import Products from "./product";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [showmobilebutton, setShowmobilebutton] = useState(false);

  const handleClick = () => setClick(!click);
  const openMobileMenu = () => setClick(true);
  const closeMobileMenu = () => setClick(false);
  const clickMobileMenu = () => setClick(!click);

  const showButton = () => {
    console.log("size screen is: " + window.innerWidth);
    if (window.innerWidth <= 960) {
      setShowmobilebutton(true);
    } else {
      setShowmobilebutton(false);
    }
  };
  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-icon-div">
        <MdFingerprint className="nav-icon" />
        Active .Inc
      </div>
      {showmobilebutton ? (
        <div className="nav-list-mobile">
          <FaAlignJustify
            className="mobile-menu-icon"
            onClick={clickMobileMenu}
          />
          <CSSTransition
            in={click}
            classNames="fade"
            timeout="200"
            unmountOnExit
          >
            <div className="absolute-menu">
              <Floatmenu title={"Products"}>
                <Products />
              </Floatmenu>
              <Floatmenu title={"About Us"}>
                <Aboutus />
              </Floatmenu>
            </div>
          </CSSTransition>
        </div>
      ) : (
        <div
          className={showmobilebutton ? "nav-list mobile-margin" : "nav-list "}
        >
          <Floatmenu title={"Products"} smallscreen={showmobilebutton}>
            <Products />
          </Floatmenu>
          <Floatmenu title={"About Us"} smallscreen={showmobilebutton}>
            <Aboutus />
          </Floatmenu>
        </div>
      )}
    </nav>
  );
}
