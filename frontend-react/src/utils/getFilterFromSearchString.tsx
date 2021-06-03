import Fuse from "fuse.js";

const arrGetMaxStringLength = (acc: number, i: string) =>
  Math.max(acc, i.length);

const getFuseOptionsForListOfFiles = (
  listOfFiles: string[],
): Fuse.IFuseOptions<{ filePath: string }> => {
  const maxFilesPathLength = listOfFiles.reduce(
    arrGetMaxStringLength,
    -Infinity,
  );

  return {
    threshold: 0.3,
    shouldSort: false,
    keys: ["filePath"],
    useExtendedSearch: false,
    distance: Math.floor((1 / 0.275) * maxFilesPathLength),
  };
};

export const getFilterFromSearchString =
  (searchString: string) => (listOfFiles: string[]) => {
    if (!searchString) return listOfFiles;

    const fuse = new Fuse(
      listOfFiles.map((filePath) => ({ filePath })),
      getFuseOptionsForListOfFiles(listOfFiles),
    );

    return fuse.search(searchString).map(({ item }) => item.filePath);
  };
