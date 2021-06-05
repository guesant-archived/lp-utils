import React from "react";
import { Redirect, Route, Switch } from "react-router";
import loadable from "@loadable/component";

const NewComparation = loadable(() => import("./NewComparation"));

export default function Compare() {
  return (
    <>
      <Switch>
        <Route path="/tools/compacted/compare/new">
          <NewComparation />
        </Route>
        <Route path="/tools/compacted/compare">
          <Redirect to="/tools/compacted/compare/new" />
        </Route>
      </Switch>
    </>
  );
}
