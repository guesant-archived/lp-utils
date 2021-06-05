import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Theme, withStyles } from "@material-ui/core/styles";
import DescriptionIcon from "@material-ui/icons/Description";
import React from "react";

const StyledBreadcrumb = withStyles((theme: Theme) => ({
  root: {
    height: theme.spacing(4),
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[400],
    },
  },
}))(Chip) as typeof Chip;

export function OpenedFileContentListItemHeader(props: { filename: string }) {
  const { filename } = props;
  return (
    <>
      <ListItemIcon style={{ minWidth: 0 }}>
        <div className="tw-ml-1 tw-mr-4" children={<DescriptionIcon />} />
      </ListItemIcon>
      <ListItemText>
        <Breadcrumbs aria-label="breadcrumb">
          {filename.split("/").map((i, idx, { length }) => (
            <StyledBreadcrumb key={idx} label={i} />
          ))}
        </Breadcrumbs>
      </ListItemText>
    </>
  );
}
