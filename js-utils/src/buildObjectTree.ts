import dotProp from "dot-prop";
import { IObjectTree } from "./types/IObjectTree";

export const buildObjectTree = (arr: string[]): IObjectTree => {
  return arr
    .map((i) => i.replace(/\./g, "\\.").replace(/\//g, "."))
    .reduce((acc, i) => dotProp.set(acc, i, {}), {});
};
