import { makeStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { createStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export type IExplorerSideBarSelectModeLinkProps = {
  icon: React.ReactNode;
  navProps: NavLinkProps;
};

const useStylesExplorerSideBarSelectMode = makeStyles((theme) =>
  createStyles({
    link: { color: "transparent" },
    linkActive: { color: theme.palette.secondary.light },
    linkListItem: {
      borderLeftWidth: "2px",
      borderLeftStyle: "solid",
      borderLeftColor: "currentcolor",
    },
  }),
);

export function ExplorerSideBarSelectModeLink(
  props: IExplorerSideBarSelectModeLinkProps,
) {
  const { icon, navProps } = props;
  const styles = useStylesExplorerSideBarSelectMode();

  return (
    <NavLink
      className={styles.link}
      activeClassName={styles.linkActive}
      {...navProps}
    >
      <ListItem button className={clsx("tw-w-14 tw-h-14", styles.linkListItem)}>
        <ListItemIcon style={{ minWidth: "0" }} children={icon} />
      </ListItem>
    </NavLink>
  );
}
