import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP_REGISTER } from 'routes';
import PageComponent from 'components/PageComponent';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoGD from 'assets/logo/gd.png';
import Fiqri from 'assets/photos/fiqri.png';

import SectionTitle from '../SectionTitle';
import './index.scss';

export default class BootcampGD extends PageComponent {
  render() {
    return (
      <div className="bootcamp-gd">
        <Helmet>
          <title> Bootcamp HMIF - Game Development </title>
        </Helmet>

        <Header
          logo={LogoGD}
          title="Game Development"
          quote="What better ways to express and tell your story than by creating games!" />

        <div className="page container">
          <div className="row d-flex flex-column align-items-center py-5">
            <Photo className="inverted" imageSrc={Fiqri} size="large" name="M Fiqri Fatriansyah" title="Head of Game Development Community" />
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What is Game Development?</SectionTitle>
              <p>
                Game dev bootcamp is an event where you (yes, you!) can learn, discuss, and create your own game!
                Yay! In this three weeks event, you will dive head first into the environtment of game development.
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What You Will Learn</SectionTitle>
              <ul className="ml-4">
                <li>Dive head first into game development via Unity and C#!</li>
                <li>Learn about assets, prefabs, scenes, and scripts!</li>
                <li>Put your crazy ideas in your head to good use in creating your own game design!</li>
                <li>Tell the most unique story you have kept this whole time with your own game!</li>
                <li>Learn how not to choke your players with good UI/UX design!</li>
                <li>Learn how to communicate with your friends (no seriously this is also important)!</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Benefits</SectionTitle>
              <ul className="ml-4">
                <li>Create your own game (duh!).</li>
                <li>Understanding how gameplay, design, and story determines your game significantly!</li>
                <li>Your confidence will be boosted from 0% to somewhere between 1% - 100%</li>
                <li>Git gud.</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Timeline</SectionTitle>
              Game Development Bootcamp will be held in 6 days:
              <ol className="ml-4">
                <li>Sunday, Sept 29th, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Oct 13th, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Oct 20th, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Oct 27th, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Nov 3rd, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Nov 10th, 2019 (8 am - 12 pm)</li>
              </ol>
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
