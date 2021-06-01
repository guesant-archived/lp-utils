import { IDirDef } from "./types/IDirDef";
import { IObjectTree } from "./types/IObjectTree";

export const dirdefFromObjectTree = (
  tree: IObjectTree,
  name?: string,
): IDirDef => {
  const currentLevel: IDirDef = { name: name, files: [], dirs: [] };
  Object.entries(tree).forEach(([path, subtree]) => {
    if (!Object.keys(subtree).length) {
      currentLevel.files.push(path);
    } else {
      currentLevel.dirs.push(dirdefFromObjectTree(subtree, path));
    }
  });
  return currentLevel;
};
