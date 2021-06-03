import React, { createContext, useCallback, useState } from "react";
import { IArchiveRecord } from "../../../../utils/getArchiveRecordFromFile";
import { ICompactManagerContext } from "./ICompactManagerContext";

export const CompactManagerContext = createContext<ICompactManagerContext>(
  {} as any,
);

export const CompactManagerProvider: React.FC = ({ children }) => {
  const [searchFilesByName, setSearchFilesByName] =
    useState<string | null>(null);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [archives, setArchives] = useState<IArchiveRecord[]>([]);

  const removeArchiveById = useCallback(
    (archiveId: string) =>
      void setArchives(archives.filter(({ id }) => id !== archiveId)),
    [archives],
  );

  return (
    <CompactManagerContext.Provider
      value={{
        archives,
        setArchives,
        removeArchiveById,

        searchFilesByName,
        setSearchFilesByName,

        isSettingsModalOpen,
        setIsSettingsModalOpen,
      }}
      children={children}
    />
  );
};
