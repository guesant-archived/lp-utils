import Divider from "@material-ui/core/Divider";
import React from "react";
import { ActionsImportFiles, ActionsOpenedContents } from "./SideBarActions";

function CompactManagerSideBarActions() {
  return (
    <>
      <ActionsImportFiles />
      <Divider />
      <ActionsOpenedContents />
    </>
  );
}

export default CompactManagerSideBarActions;
