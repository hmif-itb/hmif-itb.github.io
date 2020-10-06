import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import * as routes from 'routes';

import ComingSoon from 'components/@ComingSoon';
import Bootcamp from 'components/@Bootcamp';
import BootcampDS from 'components/@Bootcamp/@DS';
import BootcampCTF from 'components/@Bootcamp/@CTF';
import BootcampCP from 'components/@Bootcamp/@CP';
import BootcampGD from 'components/@Bootcamp/@GD';
import BootcampUX from 'components/@Bootcamp/@UX';
import BootcampRegister from 'components/@Bootcamp/@Register';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.ROUTE_HOME} component={ComingSoon} exact />
        <Route path={routes.ROUTE_BOOTCAMP_REGISTER} component={BootcampRegister} />
        <Route path={routes.ROUTE_BOOTCAMP_CP} component={BootcampCP} />
        <Route path={routes.ROUTE_BOOTCAMP_CTF} component={BootcampCTF} />
        <Route path={routes.ROUTE_BOOTCAMP_DS} component={BootcampDS} />
        <Route path={routes.ROUTE_BOOTCAMP_UX} component={BootcampUX} />
        <Route path={routes.ROUTE_BOOTCAMP_GAME} component={BootcampGD} />
        <Route path={routes.ROUTE_BOOTCAMP} component={Bootcamp} exact />
//         <Route path='/:path' component={(props) => {
//           window.location.href = `https://go.hmif.tech/${props.match.params.path}`;
//           return null;
//         }}/>
      </Switch>
    );
  }
}
