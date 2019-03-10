import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import './index.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header p-3">
        <img className="logo" alt="CP" src={this.props.logo}/>
        <h1 className="mb-3 font-weight-bold text-center">{this.props.title}</h1>
        <p className="font-italic text-small text-center">{this.props.quote}</p>
        <Link to={ROUTE_BOOTCAMP} >
          <button className="button-back font-weight-semibold">&lt; Back</button>
        </Link>
      </div>
    );
  }
}
