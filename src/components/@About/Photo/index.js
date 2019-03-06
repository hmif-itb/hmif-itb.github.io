import React, { Component } from "react";
import "./index.scss";

export default class Photo extends Component {
  render() {
    return (
      <div className={"photo " + this.props.className + " " + this.props.size}>
        <div className={"photo-wrapper mb-2 " + this.props.size}>
          <img src={this.props.imageSrc} alt="foto anggota"/>
        </div>
        <div className="font-weight-bold text-center">{this.props.name}</div>
        <div className="font-italic text-xsmall text-center">{this.props.title}</div>
      </div>
    );
  }
}
