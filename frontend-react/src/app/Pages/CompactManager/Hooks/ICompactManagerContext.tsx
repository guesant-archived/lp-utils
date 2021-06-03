import { IArchiveRecord } from "../../../../utils/getArchiveRecordFromFile";

type ISet<T> = (value: T) => void;

export type ICompactManagerContext = {
  archives: IArchiveRecord[];
  setArchives: ISet<IArchiveRecord[]>;
  removeArchiveById: (idOfArchiveToRemove: string) => void;

  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: ISet<boolean>;

  searchFilesByName: string | null;
  setSearchFilesByName: ISet<string | null>;
};
