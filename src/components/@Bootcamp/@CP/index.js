import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoCP from 'assets/logo/cp.png';
import Irfan from 'assets/photos/irfan.png';

import './index.scss';
import SectionTitle from '../SectionTitle';

export default class BootcampCP extends Component {
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
                <li>Graph: BFS, DFS, Toposort, MST, Shortest Path, Network Flow</li>
                <li>Dynamic Programming: Prefix Sum, LCS, LIS, Coin Change, Bitmask</li>
                <li>Data Structure: Union-Find Disjoint Set, Segment Tree, Binary Indexed Tree</li>
                <li>Computational Geometry: Point, Line, Segment, Convex Hull</li>
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
