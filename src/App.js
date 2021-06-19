import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar, Home, Auth } from "./components";

const App = () => {
    return (
        <Router>
            <Container maxWidth="lg">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/auth" component={Auth} />
                </Switch>
            </Container>
        </Router>
    );
};

export default App;
