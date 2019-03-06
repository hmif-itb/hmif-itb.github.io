import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./index.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Helmet>
          <title> HMIF Tech </title>
        </Helmet>

        <div className="page welcome">
            <h1 className="font-weight-bold text-center">#HMIF<span className="text-white">Tech</span></h1>
            <div className="font-weight-bold text-center">Coming soon.</div>
        </div>
      </div>
    );
  }
}
