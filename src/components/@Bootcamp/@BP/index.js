import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP_REGISTER } from 'routes';
import PageComponent from 'components/PageComponent';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoBP from 'assets/logo/bp.png';
import Timothy from 'assets/photos/timothy.png';

import SectionTitle from '../SectionTitle';
import './index.scss';

export default class BootcampBP extends PageComponent {
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
              <ol className="ml-4">
                <li>
                  <span className="font-weight-bold">ICT Product Ideation</span>:
                  Aims to inspire  students to use their creativity to develop innovative, cost-effective and practical solutions to accessibility-related issues resulting in digital business.
                </li>
                <li>
                  <span className="font-weight-bold">ICT Business Plan</span>:
                  Aims to stimulate entrepreneurship among students. Teams are challenged to conceive of a new service or product offering, and then create a business plan and concept pitch aimed at convincing potential investors to finance the business.
                </li>
                <li>
                  <span className="font-weight-bold">Business IT Case</span>:
                  Upgrading the problem solving abilities of participants in analyzing and solving various business cases provided by providing solutions through the Information Technology approach.
                </li>
              </ol>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What Makes This Bootcamp Different?</SectionTitle>
              <ol className="ml-4">
                <li>Study case learning</li>
                <li>Competition winners and experienced speakers</li>
                <li>Practical hands-on</li>
                <li>Mini competition</li>
              </ol>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Timeline</SectionTitle>
              ICT Business Plan Bootcamp will be held in 3 days:
              <ol className="ml-4">
                <li>Sunday, Oct 13th, 2019 (8 am - 12 pm) </li>
                <li>Sunday, Oct 20th, 2019 (8 am - 12 pm)</li>
                <li>Sunday, Oct 27th, 2019 (8 am - 12 pm) </li>
              </ol>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Speakers</SectionTitle>
              <ol className="ml-4">
                <li>ICT Business Plan Community
                  <ul className="ml-4">
                    <li>Timothy Sihombing</li>
                    <li>Deryan Tejasatya</li>
                    <li>Savira Nadela</li>
                  </ul>
                </li>
                <li>Progressio Consulting Group
                  <ul className="ml-4">
                    <li>Yeremia Hartanto</li>
                    <li>Geraldine Hizkia</li>
                  </ul>
                </li>
                <li>Phoenix
                  <ul className="ml-4">
                    <li>Albert Sahala</li>
                    <li>Rifda Annelies</li>
                    <li>Johan Purnomo</li>
                  </ul>
                </li>
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
