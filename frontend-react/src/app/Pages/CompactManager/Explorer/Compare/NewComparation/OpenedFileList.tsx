import List from "@material-ui/core/List";
import React from "react";
import { useCompactManagerContext } from "../../../Hooks/useCompactManagerContext";
import OpenedFileListItem from "./OpenedFileListItem";

export default function OpenedFileList() {
  const { openedFiles } = useCompactManagerContext();
  return (
    <div>
      <List>
        {openedFiles.map((openedFile) => (
          <OpenedFileListItem key={openedFile.id} openedFile={openedFile} />
        ))}
      </List>
    </div>
  );
}
