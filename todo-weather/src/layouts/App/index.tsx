import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../page/Home";
import Todo from "../../page/Todo";
import Header from "../Header";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/todo" exact component={Todo}></Route>
      </Switch>
    </div>
  );
}

export default App;
