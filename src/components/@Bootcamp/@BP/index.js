import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoBP from 'assets/logo/bp.png';
import Timothy from 'assets/photos/timothy.png';

import SectionTitle from '../SectionTitle';
import './index.scss';

export default class BootcampBP extends Component {
  render() {
    return (
      <div className="bootcamp-bp">
        <Helmet>
          <title> Bootcamp HMIF - Business Plan </title>
        </Helmet>

        <Header
          logo={LogoBP}
          title="Business Plan"
          quote="It's not about ideas. It's about making ideas happen." />

        <div className="page container">
          <div className="row d-flex flex-column align-items-center py-5">
            <Photo className="inverted" imageSrc={Timothy} size="large" name="Timothy Thamrin S" title="Head of Business Plan Community" />
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <p className="text-small">
                <span className="font-italic">
                  What do you need to start a business? Three simple things: know your product better than anyone, know your customer, and have a burning desire to succeed.
                </span>
                ~ Dave Thomes, Founder, Wendy's
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What You Will Learn</SectionTitle>
              <ul className="ml-4">
                <li>Problem Validation</li>
                <li>Demand Projection</li>
                <li>Leveraging Opportunity</li>
                <li>Market Trends</li>
                <li>Business Insights</li>
                <li>Market Sizing</li>
                <li>... and many more!</li>
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
