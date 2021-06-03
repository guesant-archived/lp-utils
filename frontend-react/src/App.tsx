import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import loadable from "@loadable/component";

const PageCompactManager = loadable(() => import("./app/Pages/CompactManager"));

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <div className="App tw-h-full">
        <Switch>
          <Route path="/tools/compacted">
            <PageCompactManager />
          </Route>
          <Route path="">
            <Redirect to="/tools/compacted" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
