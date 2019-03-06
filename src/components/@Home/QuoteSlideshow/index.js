import React, { Component } from "react";
import "./index.scss";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      quoteIdx: 0
    };
  }

  componentDidMount() {
    this.setState((_) => {
      return { quoteIdx: Math.floor(Math.random() * this.props.quotes.length) }
    });
    this.timeout = setInterval(() => {
      let currentIdx = this.state.quoteIdx;
      this.setState({ quoteIdx: (currentIdx + 1) % this.props.quotes.length });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  renderQuote(quote, i) {
    console.log(this.state.quoteIdx);
    let classes = "quote";
    if (this.state.quoteIdx === i) classes += " active";
    if ((this.state.quoteIdx + 1) % this.props.quotes.length === i) classes += " right";
    if ((this.state.quoteIdx + this.props.quotes.length - 1) % this.props.quotes.length === i) classes += " left";
    return (
      <div key={i} className={classes}>
        <div className="big-text font-weight-bold mb-3">
          {quote.text}
        </div>
        <div className="division mb-5">
          <div className="line"></div>
          <span className="font-weight-semibold">{quote.source}</span>
        </div>
      </div>
    );
  }

  render() {
    let quotes = [];
    for (let i = 0; i < this.props.quotes.length; i++) {
      quotes.push(this.renderQuote(this.props.quotes[i], i));
    }
    return (
      <div className="quotes">
        {quotes}
      </div>
    );
  }
}
