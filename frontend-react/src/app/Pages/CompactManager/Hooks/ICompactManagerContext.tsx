import { IArchiveRecord } from "../../../../utils/getArchiveRecordFromFile";

export type ICompactManagerContext = {
  archives: IArchiveRecord[];
  setArchives: (value: IArchiveRecord[]) => void;
  removeArchiveById: (idOfArchiveToRemove: string) => void;

  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: (value: boolean) => void;

  searchFilesByName: string | null;
  setSearchFilesByName: (value: string | null) => void;
};
