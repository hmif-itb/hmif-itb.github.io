import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP_REGISTER } from 'routes';
import PageComponent from 'components/PageComponent';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoCP from 'assets/logo/cp.png';
import Irfan from 'assets/photos/irfan.png';

import './index.scss';
import SectionTitle from '../SectionTitle';

export default class BootcampCP extends PageComponent {
  render() {
    return (
      <div className="bootcamp-cp">
        <Helmet>
          <title> Bootcamp HMIF - CP </title>
        </Helmet>

        <Header
          logo={LogoCP}
          title="Competitive Programming"
          quote="Problem needs efficient ways to solved, competitive programming is the answer to that." />

        <div className="page container">
          <div className="row d-flex flex-column align-items-center py-5">
            <Photo className="inverted" imageSrc={Irfan} size="large" name="Irfan Sofyana" title="Head of Competitive Programming Community" />
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>What You Will Learn</SectionTitle>
              <ul className="ml-4">
                <li>Introduction to Competitive Programming: C++ STL, Ad Hoc</li>
                <li>Bruteforce, Greedy</li>
                <li>Math: Combinatorics, Number Theory</li>
                <li>Graph: BFS, DFS, Toposort, MST, Shortest Path</li>
                <li>Dynamic Programming: Prefix Sum, LCS, LIS, Coin Change, Bitmask</li>
                <li>Data Structure: Union-Find Disjoint Set, Segment Tree, Binary Indexed Tree</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Preferrable Skills</SectionTitle>
              <ul className="ml-4">
                <li>Programming language (C++)</li>
                <li>Curious to learn algorithms and data structure</li>
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <SectionTitle>Timeline</SectionTitle>
              Competitive Programming Bootcamp will be held in 6 days:
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
