// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from './store/';
import { Home } from './screens/Home';

export const App = () => (
    <Provider>
        <Router>
            <Route path="/" component={Home} />
        </Router>
    </Provider>
);
