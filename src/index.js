import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/posts" component={PostsNew}/>
				<Route path="/" component={PostsIndex}/>
			</Switch>
		</div>
	</BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
