import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import clsx from "clsx";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { getOpenedFileRecordFromFile } from "../../../../../utils/getArchiveRecordFromFile";
import { useCompactManagerContext } from "../../Hooks/useCompactManagerContext";
import { ActionOpenArchiveDropzoneButton } from "./ActionOpenArchiveDropzoneButton";
import { useStylesOpenArchive } from "./styles";

const StyledActionOpenArchiveDropzone: React.FC<{
  divProps?: React.HTMLAttributes<HTMLDivElement>;
}> = ({ children, divProps }) => {
  const styles = useStylesOpenArchive();
  return (
    <>
      <List>
        <ListItem>
          <div
            {...divProps}
            children={children}
            className={clsx("tw-w-full", styles.dropzone)}
          />
        </ListItem>
      </List>
    </>
  );
};

export function ActionOpenArchiveDropzone() {
  const { setOpenedFiles } = useCompactManagerContext();

  const updateOpenedArchives = useCallback((selectedFiles: File[] | null) => {
    const files = Array.from(selectedFiles || []).map(
      getOpenedFileRecordFromFile,
    );
    setOpenedFiles(files);
  }, []);

  const dropState = useDropzone({
    multiple: true,
    accept: ".zip,.rar,.tar",
    onDrop: updateOpenedArchives,
  });
  const { getRootProps, getInputProps } = dropState;

  return (
    <StyledActionOpenArchiveDropzone divProps={getRootProps()}>
      <input {...getInputProps()} />
      <ActionOpenArchiveDropzoneButton dropState={dropState} />
    </StyledActionOpenArchiveDropzone>
  );
}
