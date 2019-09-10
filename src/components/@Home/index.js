import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_ABOUT, ROUTE_BOOTCAMP } from 'routes';
import PageComponent from 'components/PageComponent';

import QuoteSlideshow from './QuoteSlideshow';
import quotes from './quotes';
import './index.scss';

export default class Home extends PageComponent {
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
              <Link to={ROUTE_BOOTCAMP}><div className="button">Join Bootcamp!</div></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
