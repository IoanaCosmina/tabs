import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';

function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/tabs/about">
                    <About />
                </Route>
                <Route path="/tabs/features">
                    <Features />
                </Route>
                <Route path="/tabs" exact>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;