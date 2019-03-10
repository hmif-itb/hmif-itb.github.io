import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoUX from 'assets/logo/ux.png';
import Fahmi from 'assets/photos/fahmi.png';

import './index.scss';

export default class BootcampUX extends Component {
  render() {
    return (
      <div className="bootcamp-ux">
        <Helmet>
          <title> Bootcamp HMIF - UI / UX </title>
        </Helmet>

        <Header
          logo={LogoUX}
          title="UI / UX"
          quote="Every great design begins with an even better story. Make yours here!" />

        <div className="page container">
          <div className="row d-flex flex-column align-items-center py-5">
            <Photo className="inverted" imageSrc={Fahmi} size="large" name="Ahmad Fahmi Pratama" title="Head of UI / UX Community" />
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <p className="text-small">
                <span className="font-italic">If you think good design is expensive, you should look at the cost of bad design</span> ~ Ralf Speth
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <h2 className="mb-3">What you will learn</h2>
              <ul className="ml-4">
              <li>User-Centered Design</li>
              <li>Design Thinking</li>
              <li>User Research</li>
              <li>Competitive Analysis</li>
              <li>Wireframing &amp; Prototyping</li>
              <li>Interaction Design</li>
              <li>...and many more</li>
              </ul>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-12">
              <Link to={ROUTE_BOOTCAMP}>
                <button className="button-register font-weight-semibold">
                  Register!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
