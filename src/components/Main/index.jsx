import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./main.css";
import Home from "../../Pages/Home";
import Chatbot from "../../Pages/Chatbot";

const Main = () => {
  return (
    <div className="mainPart">
      <div className="mainPart-inside">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/chatbot">
            <Chatbot />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
