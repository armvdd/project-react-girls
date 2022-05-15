import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
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
  );
};

export default Menu;
