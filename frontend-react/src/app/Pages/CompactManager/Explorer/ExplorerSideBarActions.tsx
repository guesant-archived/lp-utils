import Divider from "@material-ui/core/Divider";
import React from "react";
import { ActionCloseAllArchives } from "./Actions/ActionCloseAllArchives";
import { ActionQuery } from "./Actions/ActionQuery";

export default function CompactExplorerSideBarActions() {
  return (
    <>
      <ActionCloseAllArchives />
      <Divider />
      <ActionQuery />
      <Divider />
    </>
  );
}
