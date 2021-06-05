import { ICompareQueryFile } from "./ICompareQueryFile";

export type ICompareQuery = {
  groupsCount: number;
  filesGroups: ICompareQueryFile[];
};
