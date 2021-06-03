import micromatch from "micromatch";

export const getFilterFromPatterns =
  (query: string[]) => (listOfFiles: string[]) =>
    micromatch(listOfFiles, query, { dot: true });
