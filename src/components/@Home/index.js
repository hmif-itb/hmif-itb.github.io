import React, { Component } from "react";
import { Helmet } from "react-helmet";
import QuoteSlideshow from "./QuoteSlideshow";
import "./index.scss";

const quotes = [
  {
    text: (
      <span>
        We nurture people to get internships. <br/>
        We care. We build. <span className="big-underline">You achieve.</span>
      </span>
    ),
    source: "Careers & Issues"
  },
  {
    text: (
      <span>
        We build winners. <br/>
        We build <span className="big-underline">champions</span>.
      </span>
    ),
    source: "Competition & Community"
  },
  {
    text: (
      <span>
        The best part of learning is <span className="big-underline">sharing</span> <br/>
        what you know.
      </span>
    ),
    source: "Vaughn K. Lauer"
  },
];

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>HMIF Tech</title>
        </Helmet>

        <div className="page welcome">
          <div className="tech mb-5">
            <span className="font-weight-bold">#HMIF</span>
            <span className="font-weight-thin">TECH</span>
          </div>
          <QuoteSlideshow quotes={quotes} />
          <div className="register font-weight-semibold">let's act, <a href="//bit.ly/pemimpi-n">register here.</a></div>
        </div>
      </div>
    );
  }
}
