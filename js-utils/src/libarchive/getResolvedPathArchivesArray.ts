import { IArchiveFile } from "./IArchiveFile";
import { resolveArchivePath } from "./resolveArchivePath";

export const getResolvedPathArchivesArray = async (arch: any) => {
  const filesArray: IArchiveFile[] = await arch.getFilesArray();
  return filesArray.map(resolveArchivePath);
};
