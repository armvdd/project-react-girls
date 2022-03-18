import React from "react";
import "./main.css";
import Home from "../../Pages/Home";
import Chatbot from "../../Pages/Chatbot";

const Main = () => {
  return (
    <div className="mainPart">
      <div className="mainPart-inside">
        <p>hlavní část</p>
        <Home />
      </div>
    </div>
  );
};

export default Main;
