import React, { Component } from "react";

export default class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
  }
  render() {
    const { location } = this.props;

    return <div>{location.state.summary}</div>;
  }
}
