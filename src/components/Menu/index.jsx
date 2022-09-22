import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./menu.css";

import mobileMenu from "./MENU.svg";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open === false) {
      setOpen(true);
    } else if (open === true) {
      setOpen(false);
    }
  };

  return (
    <>
      <div className="menu">
        <Link to="/home" className="menuLink menuLink--home">
          Home
        </Link>
        <Link to="/chatbot" className="menuLink menuLink--home">
          Chatbot
        </Link>
        <Link to="/vyhledavac" className="menuLink menuLink--vyhledavac">
          Vyhledávač
        </Link>
        <Link to="/blog" className="menuLink menuLink--blog">
          Blog
        </Link>
        <Link to="/kontakty" className="menuLink menuLink--kontakty">
          Kontakty
        </Link>
      </div>
      <div className="menu-mobile">
        <img
          src={mobileMenu}
          className="menu-mobile--img"
          onClick={handleClick}
        />
        <div className={open ? "menu-mobile--menu" : "menu-mobile--hidden"}>
          <Link to="/home" className="menuLink-mobile menuLink--home-mobile">
            Home
          </Link>
          <Link to="/chatbot" className="menuLink-mobile menuLink--home-mobile">
            Chatbot
          </Link>
          <Link
            to="/vyhledavac"
            className="menuLink-mobile menuLink--vyhledavac-mobile"
          >
            Vyhledávač
          </Link>
          <Link to="/blog" className="menuLink-mobile menuLink--blog-mobile">
            Blog
          </Link>
          <Link
            to="/kontakty"
            className="menuLink-mobile menuLink--kontakty-mobile"
          >
            Kontakty
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
