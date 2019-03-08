import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './index.scss';

export default class Join extends Component {
  render() {
    return (
      <div className="join">
        <Helmet>
          <title> Join HMIF Tech </title>
        </Helmet>

        <div className="page">
            <h1 className="font-weight-bold text-center">Join #HMIF<span className="font-weight-thin">Tech</span>!</h1>
            <div className="text-center font-italic text-white mb-2">Dare to contribute?</div>
            <a href="https://bit.ly/pemimpi-n">
                <div className="button font-weight-bold">Click here!</div>
            </a>
        </div>
      </div>
    );
  }
}
