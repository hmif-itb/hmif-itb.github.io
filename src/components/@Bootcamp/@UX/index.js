import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoUX from 'assets/logo/ux.png';
import Fahmi from 'assets/photos/fahmi.png';

import SectionTitle from '../SectionTitle';
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
              <SectionTitle>What is UI/UX Bootcamp?</SectionTitle>
              <p>
                UI/UX Bootcamp is a 3-week basic UI and UX training that is full of course and hands-on training.
                This aims you to grasp core knowledge to make you ready for creating great user-centered digital prototype.
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What You Will Learn</SectionTitle>
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

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Preferrable Skills</SectionTitle>
              <ul className="ml-4">
                <li>Has basic knowledge of Illustrator/CorelDraw usage</li>
                <li>Has basic experience of graphic design</li>
                <li>Curious to learn new things and explore creative solutions</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Benefits</SectionTitle>
              <ul className="ml-4">
                <li>Gain exposure in UI/UX related competition, e.g. mobile app/web design competition, hackathons, game development, etc</li>
                <li>Most "app-building" competitions undoubtedly requires good interface. So, what are you waiting for?</li>
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
