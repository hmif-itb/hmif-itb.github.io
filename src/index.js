import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Router from 'routes/router';
import 'styles/index.scss';

ReactDOM.render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>,
	document.getElementById('app'));

serviceWorker.unregister();
