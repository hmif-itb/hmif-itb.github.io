import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import * as routes from 'routes';

import ComingSoon from 'components/@ComingSoon';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path={routes.ROUTE_HOME} component={ComingSoon} />
      </Switch>
    );
  }
}
