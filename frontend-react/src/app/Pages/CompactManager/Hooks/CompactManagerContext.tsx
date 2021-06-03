import React, { createContext, useCallback, useState } from "react";
import { IOpenedFileRecord } from "../../../../utils/getArchiveRecordFromFile";
import { ICompactManagerContext } from "./ICompactManagerContext";

export const CompactManagerContext = createContext<ICompactManagerContext>(
  {} as any,
);

export const CompactManagerProvider: React.FC = ({ children }) => {
  const [searchFilesByName, setSearchFilesByName] =
    useState<string | null>(null);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [openedFiles, setOpenedFiles] = useState<IOpenedFileRecord[]>([]);

  const removeOpenedFileById = useCallback(
    (archiveId: string) =>
      void setOpenedFiles(openedFiles.filter(({ id }) => id !== archiveId)),
    [openedFiles],
  );

  return (
    <CompactManagerContext.Provider
      value={{
        openedFiles,
        setOpenedFiles,
        removeOpenedFileById,

        searchFilesByName,
        setSearchFilesByName,

        isSettingsModalOpen,
        setIsSettingsModalOpen,
      }}
      children={children}
    />
  );
};
