import Navbar from 'core/components/Navbar';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/">
                <Home />
            </Route>    
        </Switch>     
    </BrowserRouter>
);

export default Routes;