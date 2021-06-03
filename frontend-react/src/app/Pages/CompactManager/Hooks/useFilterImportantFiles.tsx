import { useCallback } from "react";
import { useSelector } from "react-redux";
import { IStoreState } from "../../../../store/IStoreState";
import { getFilterFromModeQueryAndSearchString } from "../../../../utils/getFilterFromModeQueryAndSearchString";
import { useCompactManagerContext } from "./useCompactManagerContext";

export const useFilterImportantFiles = () => {
  const { viewMode, configQuery } = useSelector(
    (state: IStoreState) => state.compactManager.config,
  );

  const { searchFilesByName } = useCompactManagerContext();

  const filter = useCallback(
    (listOfFiles: string[]) =>
      getFilterFromModeQueryAndSearchString(
        viewMode,
        configQuery,
        searchFilesByName,
      )(listOfFiles),
    [configQuery, viewMode, searchFilesByName],
  );

  return { filter };
};
