import { ICompareQueryFile } from "./ICompareQueryFile";

export const fnFileMatch =
  (fileId: string, filePath: string) => (i: ICompareQueryFile) =>
    i.fileId === fileId && i.filePath === filePath;
