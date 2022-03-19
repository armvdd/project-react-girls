import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Chatbot from "./Pages/Chatbot";

function App() {
  return (
    <div className="App">
      {/* Linky přesunout do samostanté komponenty menu 
      <Link to="/home">Home</Link>
      <Link to="/chatbot">Chatbot</Link>
      */}

      {/* tohle do Main:

<Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/chatbot">
          <Chatbot />
        </Route>
      </Switch>

*/}

      <Layout />
    </div>
  );
}

export default App;
