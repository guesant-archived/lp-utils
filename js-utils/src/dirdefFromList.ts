import { buildObjectTree } from "./buildObjectTree";
import { dirdefFromObjectTree } from "./dirdefFromObjectTree";
import { IDirDef } from "./types/IDirDef";

export const dirdefFromList = (arr: string[]): IDirDef =>
  dirdefFromObjectTree(buildObjectTree(arr));
