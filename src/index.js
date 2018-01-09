import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';


import App from './components/app';
import Main from './containers/main';

export const history = createBrowserHistory();

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxPromise, logger)));

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/main" component={Main} />
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>

)

ReactDOM.render(
    router,
    document.getElementById('root')
);
registerServiceWorker();
