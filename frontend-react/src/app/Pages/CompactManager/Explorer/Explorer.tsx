import loadable from "@loadable/component";
import Divider from "@material-ui/core/Divider";
import React from "react";
import { Route, Switch } from "react-router-dom";
import CompactExplorerSideBar from "./ExplorerSideBar";
import ExplorerSideBarSelectMode from "./ExplorerSideBarSelectMode";

const Compare = loadable(() => import("./Compare/Compare"));

export default function CompactExporer() {
  return (
    <>
      <div
        style={{ gridTemplateColumns: "repeat(4,auto) 1fr" }}
        className="tw-h-full tw-grid tw-overflow-y-hidden"
      >
        <ExplorerSideBarSelectMode />
        <Divider orientation="vertical" />
        <div className="tw-overflow-hidden" style={{ width: 330 }}>
          <CompactExplorerSideBar />
        </div>
        <Divider orientation="vertical" />
        <div className="tw-overflow-hidden">
          <Switch>
            <Route path="/tools/compacted/compare">
              <Compare />
            </Route>
            <Route path="/tools/compacted" exact />
          </Switch>
        </div>
      </div>
    </>
  );
}
