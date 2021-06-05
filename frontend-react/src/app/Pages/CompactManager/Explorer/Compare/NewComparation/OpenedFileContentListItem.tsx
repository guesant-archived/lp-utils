import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import React from "react";
import { IOpenedFileRecord } from "../../../../../../utils/getArchiveRecordFromFile";
import { OpenedFileContentListItemHeader } from "./OpenedFileContentListItemHeader";
import OpenedFileSelectGroup from "./OpenedFileContentSelectGroup";

type ComponentProps = { filename: string; openedFile: IOpenedFileRecord };

export function OpenedFileContentListItem(props: ComponentProps) {
  const { openedFile, filename } = props;
  return (
    <React.Fragment key={filename}>
      <ListItem
        dense
        button
        key={filename}
        className="tw-px-0 tw-py-0 tw-pl-0 tw-mb-2"
      >
        <OpenedFileContentListItemHeader filename={filename} />
        <ListItemSecondaryAction
          style={{ maxWidth: "55%" }}
          className="tw-overflow-auto"
        >
          <OpenedFileSelectGroup filename={filename} fileId={openedFile.id} />
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  );
}
