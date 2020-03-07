import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_BOOTCAMP } from 'routes';
import './index.scss';

import LogoBootcamp from 'assets/logo/bootcamp.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header p-3" style={{borderBottom: `4px dashed ${this.props.borderColor}`}}>
        <div className="container">
          <div>
            <Link to={ROUTE_BOOTCAMP} >
              <img alt="Bootcamp" src={LogoBootcamp} className="bootcamp-logo" />
            </Link>
          </div>
          <div className="content">
            <img className="logo" alt="CP" src={this.props.logo}/>
            <h1 className="mb-3 font-weight-bold super-heading">{this.props.title}</h1>
            <p className="font-italic text-small">{this.props.quote}</p>
          </div>
        </div>
      </div>
    );
  }
}
