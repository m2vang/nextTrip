import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import MainPage from "./MainPage";
import PageNotFound from "./PageNotFound";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route component={PageNotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default (App);
