import Divider from "@material-ui/core/Divider";
import React from "react";
import CompactExplorerSideBar from "./ExplorerSideBar";
import { StyledCompactExporer } from "./styles";

export default function CompactExporer() {
  return (
    <StyledCompactExporer>
      <CompactExplorerSideBar />
      <Divider orientation="vertical" />
      <div className="tw-bg-black tw-bg-opacity-40"></div>
    </StyledCompactExporer>
  );
}
