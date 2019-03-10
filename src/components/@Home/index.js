import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import QuoteSlideshow from './QuoteSlideshow';
import { ROUTE_ABOUT } from 'routes';
import quotes from './quotes';
import './index.scss';

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
          </div>
        </div>
      </div>
    );
  }
}
