import { ICompactManagerViewModesState } from "../store/ICompactManagerState";
import { getFilterFromPatterns } from "./getFilterFromPatterns";
import { getFilterFromSearchString } from "./getFilterFromSearchString";
import { identityFilter } from "./getIdentityFilter";
import { applyFiltersOnListOfFiles } from "./applyFiltersOnListOfFiles";

export const getFilterFromModeQueryAndSearchString =
  (
    viewMode: ICompactManagerViewModesState,
    configQuery: string[],
    searchString: string | null,
  ) =>
  (listOfFiles: string[]) => {
    const configFilter = (() => {
      return viewMode === "important"
        ? getFilterFromPatterns(configQuery)
        : identityFilter;
    })();

    const customFilter = (() => {
      return searchString !== null
        ? getFilterFromSearchString(searchString)
        : identityFilter;
    })();

    return applyFiltersOnListOfFiles(listOfFiles, [configFilter, customFilter]);
  };
