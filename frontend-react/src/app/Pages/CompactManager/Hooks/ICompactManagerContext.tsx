import { IOpenedFileRecord } from "../../../../utils/getArchiveRecordFromFile";

export type ICompactManagerContext = {
  openedFiles: IOpenedFileRecord[];
  setOpenedFiles: (value: IOpenedFileRecord[]) => void;
  removeOpenedFileById: (idOfArchiveToRemove: string) => void;

  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: (value: boolean) => void;

  searchFilesByName: string | null;
  setSearchFilesByName: (value: string | null) => void;
};
