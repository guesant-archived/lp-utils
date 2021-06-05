import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import React from "react";
import { IOpenedFileRecord } from "../../../../../../utils/getArchiveRecordFromFile";

export type OpenedFileListItemHeaderProps = {
  onClick?: () => void;
  isCollapseOpened: boolean;
  openedFile: IOpenedFileRecord;
};

export default function OpenedFileListItemHeader(
  props: OpenedFileListItemHeaderProps,
) {
  const { openedFile, onClick, isCollapseOpened } = props;
  return (
    <ListItem onClick={onClick} button className="tw-px-0 tw-py-0 tw-pl-0">
      <ListItemIcon
        children={
          <div className="tw-ml-2 tw-mr-3">
            {isCollapseOpened ? <FolderOpenIcon /> : <FolderIcon />}
          </div>
        }
      />
      <ListItemText primary={openedFile.file.name} />
    </ListItem>
  );
}
