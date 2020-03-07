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
          quote={<>Dive into the world of competitive programming! Master problem solving techniques, hone your mathematics analysis strength, push the boundaries of your reasoning skill, and maximize your programming ability!</>}
          borderColor='#4CAF50' />

        <div className="page container mt-4">
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
                <li>Saturday, Oct 12th, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, Oct 20th, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, Oct 27th, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, Nov 3rd, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, Nov 10th, 2019 (1 pm - 6 pm)</li>
                <li>Sunday, Nov 17th, 2019 (1 pm - 6 pm)</li>
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
