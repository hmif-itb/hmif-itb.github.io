import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP_REGISTER } from 'routes';
import PageComponent from 'components/PageComponent';
import Header from '../Header';
import LogoUX from 'assets/logo/ux.svg';

import './index.scss';
import SectionTitle from '../SectionTitle';

export default class BootcampUX extends PageComponent {
  render() {
    return (
      <div className="bootcamp-ux">
        <Helmet>
          <title> Bootcamp HMIF - UI/UX </title>
        </Helmet>

        <Header
          logo={LogoUX}
          title={<>UI/<span style={{color: '#3F51B5'}}>UX</span></>}
          borderColor='#3F51B5'
          quote={"People ignore design that ignores people"}
        />

        <div className="page container mt-4">
          <div className="row mb-3">
            <div className="col-12">
              <p className="text-small">
                <span className="font-italic">If you think good design is expensive, you should look at the cost of bad design</span> ~ Ralf Speth
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What to Expect</SectionTitle>
              <ul className="ml-4">
                <li>Mini Project</li>
                <li>UX Theories</li>
                <li>UI Theories</li>
                <li>Wireframing</li>
                <li>High-Fidelity Design</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Preferrable Skills</SectionTitle>
              <ul className="ml-4">
                <li>Has basic knowledge of graphic design softwares (Illustrator, CorelDraw, Photoshop, or any of your choices)</li>
                <li>Has basic experience of graphic design</li>
                <li>Interested in UI / UX</li>
              </ul>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-12">
              <Link to={ROUTE_BOOTCAMP_REGISTER}>
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
