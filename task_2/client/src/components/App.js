import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./404Page";
import NavBar from "./NavBar";
import Profiles from "./Profiles";

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="main-container">
          <NavBar />
          <div className="container">
            <Switch>
              <Route
                path="/"
                exact
                render={() => <Profiles storytype="topstories" key="1" />}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
