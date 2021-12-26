import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home/Home.jsx";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
