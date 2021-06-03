export const applyFiltersOnListOfFiles = (
  listOfFiles: string[],
  filters: ((listOfFiles: string[]) => string[])[],
) => {
  return filters.reduce(
    (currentListOfFiles, filter) => filter(currentListOfFiles),
    listOfFiles,
  );
};
