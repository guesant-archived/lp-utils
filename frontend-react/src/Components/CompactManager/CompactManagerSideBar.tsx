import Divider from "@material-ui/core/Divider";
import React from "react";
import CompactManagerSideBarActions from "./CompactManagerSideBarActions";
import CompactManagerSideBarArchives from "./CompactManagerSideBarArchives";

export default function CompactManagerSideBar() {
  return (
    <div className="tw-overflow-hidden tw-flex tw-flex-col">
      <CompactManagerSideBarActions />
      <Divider />
      <CompactManagerSideBarArchives />
      <Divider />
    </div>
  );
}
