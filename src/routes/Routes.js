import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Footer from '../components/Footer';

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
                <Footer />
            </Router>
        </main>
    )
}

export default Routes;
