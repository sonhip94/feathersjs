import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';

import { Router, Route } from 'react-router';
import { IndexRoute } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

import registerServiceWorker from './registerServiceWorker';

const router = (
	<Provider store = {store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}></IndexRoute>
			</Route>
		</Router>
	</Provider>
)


ReactDOM.render(
	router, 
	document.getElementById('root')
);
registerServiceWorker();
