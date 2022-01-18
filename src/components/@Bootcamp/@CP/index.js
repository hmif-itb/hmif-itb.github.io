import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP_REGISTER } from 'routes';
import PageComponent from 'components/PageComponent';
import Header from '../Header';
import LogoCP from 'assets/logo/cp.svg';

import './index.scss';
import SectionTitle from '../SectionTitle';

export default class BootcampCP extends PageComponent {
  render() {
    return (
      <div className="bootcamp-cp">
        <Helmet>
          <title> Bootcamp HMIF - Competitive Programming </title>
        </Helmet>

        <Header
          logo={LogoCP}
          title={<>Competitive <span style={{color: '#4CAF50'}}>Programming</span></>}
          quote={<>Solving short problems with code, correctly and efficiently</>}
          borderColor='#4CAF50' />

        <div className="page container mt-4">
          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What to Expect</SectionTitle>
              <ul className="ml-4">
                <li>Algorithms and Data Structures</li>
                <li>Coding Implementation Skills</li>
                <li>Mathematics</li>
                <li>Problem Solving Techniques</li>
                <li>Debugging Skill</li>
                <li>Competitions Sharing</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Preferrable Skills</SectionTitle>
              <ul className="ml-4">
                <li>Programming language (Preferably C++ / Java / Python)</li>
                <li>Curious to learn algorithms and data structure</li>
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
