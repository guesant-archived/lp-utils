import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import { IOpenedFileRecord } from "../../../../../../utils/getArchiveRecordFromFile";
import OpenedFileContentList from "./OpenedFileContentList";
import OpenedFileListItemHeader from "./OpenedFileListItemHeader";

export type OpenedFileListItemProps = { openedFile: IOpenedFileRecord };

export default function OpenedFileListItem(props: OpenedFileListItemProps) {
  const { openedFile } = props;
  const [isCollapseOpened, setCollapseOpenedState] = useState(false);
  return (
    <>
      <Paper className="tw-my-1">
        <OpenedFileListItemHeader
          openedFile={openedFile}
          isCollapseOpened={isCollapseOpened}
          onClick={() => setCollapseOpenedState(!isCollapseOpened)}
        />
        <Divider />
        <Collapse
          unmountOnExit
          timeout="auto"
          className="tw-w-full"
          in={isCollapseOpened}
          children={<OpenedFileContentList openedFile={openedFile} />}
        />
      </Paper>
    </>
  );
}
