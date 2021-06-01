import { strcmp } from "../strcmp";
import { getResolvedPathArchivesArray } from "./getResolvedPathArchivesArray";

export const getResolvedPathArray = async (arch: any) => {
  const resolvedPathArchiveArray = await getResolvedPathArchivesArray(arch);
  return resolvedPathArchiveArray.map(([path]): string => path).sort(strcmp);
};
