import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import { ActionQueryToggleViewMode } from "./ActionQueryToggleViewMode";
import { ActionQuerySearch } from "./ActionQuerySearch";

export function ActionQuery() {
  return (
    <List dense>
      <ListItem dense className="tw-flex tw-gap-2">
        <div className="tw-flex-1">
          <ActionQuerySearch />
        </div>
        <div>
          <ActionQueryToggleViewMode />
        </div>
      </ListItem>
    </List>
  );
}
