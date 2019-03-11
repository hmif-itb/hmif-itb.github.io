import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import Photo from 'components/Photo';
import Header from '../Header';
import LogoGame from 'assets/logo/ds.png';
import Fiqri from 'assets/photos/fiqri.png';

import './index.scss';

export default class BootcampGame extends Component {
  render() {
    return (
      <div className="bootcamp-game">
        <Helmet>
          <title> Bootcamp HMIF - Game Development </title>
        </Helmet>

        <Header
          logo={LogoGame}
          title="Game Development"
          quote="" />

        <div className="page container">
          <div className="row d-flex flex-column align-items-center py-5">
            <Photo className="inverted" imageSrc={Fiqri} size="large" name="M Fiqri Fatriansyah" title="Head of Game Development Community" />
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <h2 className="mb-3">What you will learn</h2>
              <ul className="ml-4">
                <li>Game Mechanics with Unity</li>
                <li>Game Flow Design</li>
                <li>UI / UX of Game</li>
                <li>Game Development Team Building</li>
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
