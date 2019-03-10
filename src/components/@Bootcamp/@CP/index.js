import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import Photo from 'components/Photo';
import LogoCP from 'assets/logo/cp.png';
import Irfan from 'assets/photos/irfan.png';

import './index.scss';

export default class BootcampCP extends Component {
  render() {
    return (
      <div className="bootcamp-cp">
        <Helmet>
          <title> Bootcamp HMIF - CP </title>
        </Helmet>

        <div className="bg-black w-100 d-flex flex-column justify-content-center align-items-center py-3">
          <img className="logo" alt="CP" src={LogoCP}/>
          <h1 className="mb-3 font-weight-bold text-center">Competitive Programming</h1>
          <p className="font-italic text-small text-center">Problem needs efficient ways to solved, competitive programming is the answer to that.</p>
        </div>

        <div className="page container">
          <div className="row d-flex flex-column align-items-center py-5">
            <Photo className="inverted" imageSrc={Irfan} size="large" name="Irfan Sofyana" title="Head of Competitive Programming Community" />
          </div>

          <div className="row mb-5">
            <div className="col-12">
              <h2 className="mb-3">What you will learn</h2>
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

          <div className="row mb-5">
            <div className="col-12">
              <Link to={ROUTE_BOOTCAMP}>
                <button className="button font-weight-semibold">
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
