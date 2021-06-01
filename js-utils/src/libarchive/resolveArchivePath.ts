import { join } from "path";
import { IArchiveFile } from "./IArchiveFile";

export const resolveArchivePath = ({ path, file }: IArchiveFile) =>
  [join(path, file.name), file] as const;
