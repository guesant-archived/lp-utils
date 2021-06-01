import Divider from "@material-ui/core/Divider";
import React from "react";

export function HomeContent() {
  return (
    <div
      className="tw-h-full tw-grid tw-overflow-y-hidden"
      style={{
        gridTemplateColumns: "minmax(320px, auto) auto 1fr",
      }}
    >
      <Divider orientation="vertical" flexItem />
    </div>
  );
}
