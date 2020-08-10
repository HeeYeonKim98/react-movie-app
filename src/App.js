import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";

import "./css/App.css";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
      </HashRouter>
    );
  }
}
