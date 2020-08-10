import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

import "./css/App.css";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/detail" component={Detail} />
      </HashRouter>
    );
  }
}
