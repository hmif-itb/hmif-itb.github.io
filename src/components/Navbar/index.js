import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_ABOUT } from 'routes';
import './index.scss';

export default class Navbar extends Component {

  renderMenu() {
    let options = [
      { text: 'Home', to: ROUTE_HOME },
      { text: 'About', to: ROUTE_ABOUT }
    ];
    let menu = [];
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      let menuOption = (
        <Link key={i} to={option.to}>
          <div className="menu">{option.text}</div>
        </Link>
      );
      if (option.text === this.props.activeMenu) {
        menuOption = (
          <div key={i} className="menu active">{option.text}</div>
        );
      }
      menu.push(menuOption);
    }
    return menu;
  }

  render() {
    return (
      <div className="navbar">
        {this.renderMenu()}
      </div>
    );
  }
}
