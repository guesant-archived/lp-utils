import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <div className="App tw-h-full">
        <Switch>
          <Route path="">
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
