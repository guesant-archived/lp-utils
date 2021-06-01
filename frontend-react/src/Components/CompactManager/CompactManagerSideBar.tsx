import Divider from "@material-ui/core/Divider";
import React from "react";
import CompactManagerSideBarActions from "./CompactManagerSideBarActions";

export default function CompactManagerSideBar() {
  return (
    <div className="tw-overflow-hidden tw-flex tw-flex-col">
      <CompactManagerSideBarActions />
      <Divider />
    </div>
  );
}
