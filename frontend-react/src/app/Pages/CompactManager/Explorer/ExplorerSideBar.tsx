import React from "react";
import Divider from "@material-ui/core/Divider";
import CompactExplorerSideBarActions from "./ExplorerSideBarActions";
import { StyledCompactExplorerSideBar } from "./styles";

export default function CompactExplorerSideBar() {
  return (
    <StyledCompactExplorerSideBar>
      <CompactExplorerSideBarActions />
      <Divider />
    </StyledCompactExplorerSideBar>
  );
}
