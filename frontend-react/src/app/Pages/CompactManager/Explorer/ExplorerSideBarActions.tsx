import Divider from "@material-ui/core/Divider";
import React from "react";
import { ActionCloseAllArchives } from "./Actions/ActionCloseAllArchives";

export default function CompactExplorerSideBarActions() {
  return (
    <>
      <ActionCloseAllArchives />
      <Divider />
    </>
  );
}
