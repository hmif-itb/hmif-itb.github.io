import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import * as serviceWorker from './serviceWorker';
import Home from 'components/@Home';
import Join from 'components/@Join';
import About from 'components/@About';
import 'styles/index.scss';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path='/about-us' component={About} />
            <Route path='/join-us' component={Join} />
            <Route path='/' component={Home} />
        </Switch>
    </Router>,
    document.getElementById('app'));

serviceWorker.unregister();