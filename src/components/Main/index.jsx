import React from "react";
import { Switch, Route } from "react-router-dom";
import "./main.css";
import Home from "../../Pages/Home";
import Chatbot from "../../Pages/Chatbot";
import Vyhledavac from "../../Pages/Vyhledavac";
import Kontakty from "../../Pages/Kontakty";

const Main = () => {
  return (
    <div className="mainPart">
      <div className="mainPart-inside">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/chatbot">
            <Chatbot />
          </Route>
          <Route path="/vyhledavac">
            <Vyhledavac />
          </Route>
          <Route path="/kontakty">
            <Kontakty />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
