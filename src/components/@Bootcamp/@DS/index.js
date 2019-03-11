import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoDS from 'assets/logo/ds.png';
import Christian from 'assets/photos/christian.png';

import './index.scss';
import SectionTitle from '../SectionTitle';

export default class BootcampDS extends Component {
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
              <SectionTitle>What is Data Science?</SectionTitle>
              <p>
                Data Science bootcamp is a 3-week event that contains discussion and hands-on about basic data science.
                Hosted by speakers with various experience in data science competition, participants will get a variety of new knowledge about data science.
              </p>
              <p className="text-small">
                <span className="font-italic">The goal is to turn data into information, and information into insight.</span> ~ Carly Fiorina, former CEO, Hewlett-Packard Co
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
