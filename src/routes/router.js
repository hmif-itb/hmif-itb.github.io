import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import * as routes from 'routes';

import Home from 'components/@Home';
import About from 'components/@About';
import Bootcamp from 'components/@Bootcamp';
import BootcampCP from 'components/@Bootcamp/@CP';
import BootcampCTF from 'components/@Bootcamp/@CTF';
import BootcampDS from 'components/@Bootcamp/@DS';
import BootcampUX from 'components/@Bootcamp/@UX';
import BootcampBP from 'components/@Bootcamp/@BP';
import BootcampGame from 'components/@Bootcamp/@Game';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.ROUTE_ABOUT} component={About} />
        <Route path={routes.ROUTE_BOOTCAMP_CP} component={BootcampCP} />
        <Route path={routes.ROUTE_BOOTCAMP_CTF} component={BootcampCTF} />
        <Route path={routes.ROUTE_BOOTCAMP_DS} component={BootcampDS} />
        <Route path={routes.ROUTE_BOOTCAMP_BP} component={BootcampBP} />
        <Route path={routes.ROUTE_BOOTCAMP_UX} component={BootcampUX} />
        <Route path={routes.ROUTE_BOOTCAMP_GAME} component={BootcampGame} />
        <Route path={routes.ROUTE_BOOTCAMP} component={Bootcamp} />
        <Route path={routes.ROUTE_HOME} component={Home} />
      </Switch>
    );
  }
}
