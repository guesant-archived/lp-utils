import List from "@material-ui/core/List";
import { strcmp } from "js-utils/src/strcmp";
import React, { useEffect, useState } from "react";
import { useArchive } from "../../../../../../hooks/useArchive";
import { IOpenedFileRecord } from "../../../../../../utils/getArchiveRecordFromFile";
import { useFilterImportantFiles } from "../../../Hooks/useFilterImportantFiles";
import { OpenedFileContentListItem } from "./OpenedFileContentListItem";

export type OpenedFileContentsProps = { openedFile: IOpenedFileRecord };

const useOpenedFileContentListState = (openedFile: IOpenedFileRecord) => {
  const Archive = useArchive();
  const { filter } = useFilterImportantFiles();
  const [filesFullPath, setFilesFullPath] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const archive = await Archive.open(openedFile.file);
      const compressedFileArray: any[] = await archive.getFilesArray();
      const filesFullPath = filter(
        compressedFileArray.map((i) => i.file).map((i) => i._path),
      ).sort(strcmp);
      setFilesFullPath(filesFullPath);
    })();
  }, [openedFile]);

  return { filesFullPath };
};

export default function OpenedFileContentList(props: OpenedFileContentsProps) {
  const { openedFile } = props;
  const { filesFullPath } = useOpenedFileContentListState(openedFile);
  return (
    <div className="tw-pl-3">
      <List dense className="tw-pt-1">
        <div className="tw-w-full tw-overflow-auto tw-max-h-full">
          {filesFullPath.map((filename) => (
            <OpenedFileContentListItem
              key={filename}
              filename={filename}
              openedFile={openedFile}
            />
          ))}
        </div>
      </List>
    </div>
  );
}
