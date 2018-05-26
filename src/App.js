// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './screens/Home';

export const App = () => (
    <Router>
        <Route path="/" component={Home} />
    </Router>
);
