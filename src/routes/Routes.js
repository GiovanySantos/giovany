import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
// import Foot from '../components/Foot';

import Header from '../components/Header';
import Home from '../pages/Home'

const Routes = () => {
    return (
        <main>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
            {/* <Foot /> */}
        </main>
    )
}

export default Routes;
