import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP_REGISTER } from 'routes';
import PageComponent from 'components/PageComponent';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoDS from 'assets/logo/ds.png';
import Christian from 'assets/photos/christian.png';

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
          title="Data Science"
          quote="Data represent billion stories to tell. It's our job to give them a voice." />

        <div className="page container">
          <div className="row d-flex flex-column align-items-center py-5">
            <Photo className="inverted" imageSrc={Christian} size="large" name="Christian Wibisono" title="Head of Data Science Community" />
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <p className="text-small">
                <span className="font-italic">The goal is to turn data into information, and information into insight.</span> ~ Carly Fiorina, former CEO, Hewlett-Packard Co
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What is Data Science?</SectionTitle>
              <p>
                Data Science bootcamp is a 3-week basic data science training that contains discussion and hands-on learning.
                Trained by speakers with various experience in data science competition, participants will get a variety of new knowledge about data science.
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What You Will Learn</SectionTitle>
              <ul className="ml-4">
                <li>Introduction to Data Science</li>
                <li>Data Science Workflow</li>
                <li>Exploratory Data Analysis</li>
                <li>Feature Engineering 101</li>
                <li>Supervised Learning</li>
                <li>Unsupervised Learning</li>
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

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Benefits</SectionTitle>
              <ul className="ml-4">
                <li>Gain exposure to data science competition</li>
                <li>Expand your network with other data science enthusiast and team up</li>
                <li>Tips &amp; trick from the winner of data science competition (Gemastik, CIMB 3D Conquest, Airliquide Data Challenge, Kaggle, and many more...)</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Timeline</SectionTitle>
              Data Science Bootcamp will be held in 6 days:
              <ol className="ml-4">
                <li>Sunday, Sept 29th, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, Oct 13th, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, Oct 20th, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, Oct 27th, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, Nov 3rd, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, Nov 10th, 2019 (1 pm - 6 pm)</li>
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
