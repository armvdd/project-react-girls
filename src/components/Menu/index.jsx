import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu-ul">
        <li className="menu-ul__li menu-ul__li1">
          <a href="/" className="menu-a menu-a1">
            Home
          </a>
        </li>
        <li className="menu-ul__li menu-ul__li2">
          <a href="/chatbot" className="menu-a menu-a2">
            Chatbot
          </a>
        </li>
        <li className="menu-ul__li menu-ul__li3">
          <a href="/vyhledavac" className="menu-a menu-a3">
            Vyhledávač
          </a>
        </li>
        <li className="menu-ul__li menu-ul__li4">
          <a href="/kontakty" className="menu-a menu-a4">
            Kontakty
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
