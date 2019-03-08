import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import QuoteSlideshow from './QuoteSlideshow';
import { ROUTE_ABOUT } from 'routes';
import './index.scss';

const quotes = [
  {
    text: (
      <span>
        We nurture people. <br/>
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
  {
    text: (
      <span>
        We build the stairs to your career path. <br/>
        <span className="big-underline">You climb</span> them.
      </span>
    ),
    source: "Careers & Issues"
  },
  {
    text: (
      <span>
        We came, <br/>
        We compete, <br />
        <span className="big-underline">We win</span>.
      </span>
    ),
    source: "Competition & Community"
  },
];

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>HMIF Tech</title>
        </Helmet>

        <div className="page">
          <div className="welcome">
            <div className="tech mb-5">
              <span className="font-weight-bold">#HMIF</span>
              <span className="font-weight-thin">TECH</span>
            </div>
            <QuoteSlideshow quotes={quotes} />
            <div className="button-row">
              <Link to={ROUTE_ABOUT}><div className="button">Learn More</div></Link>
            </div>
            <div className="register font-weight-semibold">
              let's act, <a href="//bit.ly/pemimpi-n">register here.</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
