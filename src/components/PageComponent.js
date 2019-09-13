import { Component } from "react";
import ReactGA from 'react-ga';

export default class PageComponent extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }
}
