import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/app';

import Main from './components/main'

export const history = createBrowserHistory();


const router = (

        <Router history={history}>
            <Switch>
                <Route path="/main" component={Main} />
                <Route path="/" component={App}/>
            </Switch>
        </Router>

)

ReactDOM.render(
    router,
    document.getElementById('root')
);
registerServiceWorker();
