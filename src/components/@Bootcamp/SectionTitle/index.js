import React, { Component } from 'react';

import './index.scss';

export default class SectionTitle extends Component {
  render() {
    return (
      <div className="section-title">
          <h2 className="title">{this.props.children}</h2>
          <div className="yellow-line"></div>
      </div>
    );
  }
}
