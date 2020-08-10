//개발자 소개 화면
import React, { Component } from "react";

import "../css/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about_container">
        <span first-child="true">About</span>
        <br />
        <br />
        <span last-child="true">movie rating web-application</span>
        <br />
        <br />

        <span last-child="true">Developer | Hee Yeon.k</span>
        <br />

        <span last-child="true">
          References | Nomad Coders, Clone coding : Movie rating web service
        </span>
      </div>
    );
  }
}
