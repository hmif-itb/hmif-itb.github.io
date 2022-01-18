import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP_REGISTER } from 'routes';
import PageComponent from 'components/PageComponent';
import Header from '../Header';
import LogoGD from 'assets/logo/gd.svg';

import './index.scss';
import SectionTitle from '../SectionTitle';

export default class BootcampGD extends PageComponent {
  render() {
    return (
      <div className="bootcamp-gd">
        <Helmet>
          <title> Bootcamp HMIF - Game Development </title>
        </Helmet>

        <Header
          logo={LogoGD}
          title={<>Game <span style={{color: '#E91E63'}}>Development</span></>}
          borderColor='#E91E63'
          quote={"Start your journey on realizing your dream game with us! Get it out of your reverie, look for clues around the world, and smith the best game ever..slowly but surely!"}
        />

        <div className="page container mt-4">

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What to Expect</SectionTitle>
              <ul className="ml-4">
                <li>Creating A Game with Unity</li>
                <li>Game Design</li>
                <li>Object Oriented Programming (OOP)</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Preferrable Skills</SectionTitle>
              <ul className="ml-4">
                <li>Have a device to run Unity and Discord</li>
                <li>Curious to learn C# and OOP</li>
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
