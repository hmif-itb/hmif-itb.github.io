import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import * as serviceWorker from './serviceWorker';
import Home from 'components/@Home';
import Join from 'components/@Join';
import About from 'components/@About';
import { ROUTE_HOME, ROUTE_JOIN, ROUTE_ABOUT } from 'routes';
import 'styles/index.scss';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path={ROUTE_ABOUT} component={About} />
            <Route path={ROUTE_JOIN} component={Join} />
            <Route path={ROUTE_HOME} component={Home} />
        </Switch>
    </Router>,
    document.getElementById('app'));

serviceWorker.unregister();
