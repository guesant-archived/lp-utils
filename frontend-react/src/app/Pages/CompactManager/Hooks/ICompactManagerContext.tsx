import { IArchiveRecord } from "../../../../utils/getArchiveRecordFromFile";

type ISet<T> = (value: T) => void;

export type ICompactManagerContext = {
  archives: IArchiveRecord[];
  setArchives: ISet<IArchiveRecord[]>;
  searchFilesByName: string | null;
  setSearchFilesByName: ISet<string | null>;
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: ISet<boolean>;
};
