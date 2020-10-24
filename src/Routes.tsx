import Navbar from 'core/components/Navbar';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import SearchProfile from 'pages/SearchProfile';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>    
            <Route path="/search-profile">
                <SearchProfile />
            </Route>    
        </Switch>     
    </BrowserRouter>
);

export default Routes;