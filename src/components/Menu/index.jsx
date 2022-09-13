import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./menu.css";

import hamburgerMenu from "./ham-menu.svg";

const Menu = () => {
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
        <img src={hamburgerMenu} className="menu-mobile--img" />
        <div className="menu-mobile--menu">
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
