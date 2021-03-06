import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP_REGISTER } from 'routes';
import PageComponent from 'components/PageComponent';
import Header from '../Header';
import LogoDS from 'assets/logo/ds.svg';

import './index.scss';
import SectionTitle from '../SectionTitle';

export default class BootcampDS extends PageComponent {
  render() {
    return (
      <div className="bootcamp-ds">
        <Helmet>
          <title> Bootcamp HMIF - Data Science </title>
        </Helmet>

        <Header
          logo={LogoDS}
          title={<>Data <span style={{color: '#2196F3'}}>Science</span></>}
          quote={"Take your first step into the hottest and most relevant field in today's industry; Grasp the concept, learn the tools, and build your network."}
          borderColor='#2196F3' />

        <div className="page container mt-4">
          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What to Expect</SectionTitle>
              <ul className="ml-4">
                <li>Data Analysis with Python</li>
                <li>Data Visualization</li>
                <li>Introduction to Machine Learning</li>
                <li>Data Science Workflow</li>
                <li>Competition and Internship Sharing</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Preferrable Skills</SectionTitle>
              <ul className="ml-4">
                <li>Programming language (Python)</li>
                <li>Passion in big data</li>
                <li>Curious to learn new things and explore creative solutions</li>
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
