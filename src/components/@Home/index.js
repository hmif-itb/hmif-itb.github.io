import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
import logoHmif from "assets/logo-hmif.png";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Helmet>
          <title> HMIF Tech </title>
        </Helmet>

        <div className="page welcome">
            <img className="logo" src={logoHmif} alt="Logo HMIF" />
            <h1 className="font-weight-bold text-center">#HMIF<span className="text-white">Tech</span></h1>
            <div className="font-weight-bold text-center">Coming soon.</div>
            <div className="border" />
        </div>
      </div>
    );
  }
}
