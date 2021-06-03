import { nanoid } from "nanoid";

export type IOpenedFileRecord = { id: string; file: File };

export const getOpenedFileRecordFromFile = (file: File): IOpenedFileRecord => ({
  file,
  id: nanoid(),
});
