import { nanoid } from "nanoid";

export type IArchiveRecord = { id: string; file: File };

export const getArchiveRecordFromFile = (file: File): IArchiveRecord => ({
  file,
  id: nanoid(),
});
