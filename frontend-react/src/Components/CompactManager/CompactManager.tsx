import { createStyles, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(
  createStyles({
    sidebarWrapper: {
      gridTemplateColumns: "minmax(320px, auto) auto 1fr",
    },
  }),
);

function CompactManager() {
  const styles = useStyles();
  return (
    <div className="tw-h-full">
      <div
        className={clsx(
          styles.sidebarWrapper,
          "tw-h-full tw-grid tw-overflow-y-hidden",
        )}
      >
      </div>
    </div>
  );
}

export default CompactManager;
