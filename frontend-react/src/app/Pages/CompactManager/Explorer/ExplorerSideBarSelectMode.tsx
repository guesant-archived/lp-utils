import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import React from "react";
import ExplorerSideBarSelectModeLink from "./ExplorerSideBarSelectModeLink";

export default function ExplorerSideBarSelectMode() {
  return (
    <>
      <List disablePadding className="tw-w-14">
        <ExplorerSideBarSelectModeLink
          icon={<FileCopyIcon />}
          navProps={{ to: "/tools/compacted", exact: true }}
        />
        <Divider />
        <ExplorerSideBarSelectModeLink
          icon={<FindReplaceIcon />}
          navProps={{ to: "/tools/compacted/compare" }}
        />
        <Divider />
      </List>
    </>
  );
}
