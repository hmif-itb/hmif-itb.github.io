import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import * as serviceWorker from './serviceWorker';
import Router from 'routes/router';
import 'styles/index.scss';

ReactGA.initialize('UA-141178655-2');
ReactDOM.render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>,
	document.getElementById('app'));

serviceWorker.unregister();
