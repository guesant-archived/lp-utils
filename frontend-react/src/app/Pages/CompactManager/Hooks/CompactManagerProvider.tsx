import React, { useState } from "react";
import { IArchiveRecord } from "../../../../types/IArchiveRecord";
import { CompactManagerContext } from "./CompactManagerContext";

export const CompactManagerProvider: React.FC = (props) => {
  const { children } = props;

  const [searchFilesByName, setSearchFilesByName] =
    useState<string | null>(null);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [archives, setArchives] = useState<IArchiveRecord[]>([]);

  return (
    <CompactManagerContext.Provider
      value={{
        archives,
        setArchives,
        isSettingsModalOpen,
        setIsSettingsModalOpen,
        searchFilesByName,
        setSearchFilesByName,
      }}
      children={children}
    />
  );
};
