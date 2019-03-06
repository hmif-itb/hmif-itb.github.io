import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import * as serviceWorker from './serviceWorker';
import Home from 'components/@Home';
import 'components/index.scss';
import 'components/spacing.scss';
import 'components/text.scss';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            {/* <Route path='/join' component={Join} /> */}
            <Route path='/' component={Home} />
        </Switch>
    </Router>,
    document.getElementById('app'));

serviceWorker.unregister();
