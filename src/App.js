// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './store/';
import { Home } from './screens/Home';
import { AddBeer } from './screens/AddBeer';

export const App = () => (
    <Provider>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddBeer} />
            </Switch>
        </Router>
    </Provider>
);
