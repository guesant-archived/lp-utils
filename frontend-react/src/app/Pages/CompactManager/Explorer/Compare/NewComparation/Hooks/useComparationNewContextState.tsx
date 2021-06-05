import { useCallback, useEffect, useState } from "react";
import immer from "immer";
import { fnFileMatch } from "./fnFileMatch";
import { ICompareQuery } from "./ICompareQuery";
import { INewComparationContext } from "./NewComparationContext";

const defaultCompareQuery: ICompareQuery = {
  groupsCount: 1,
  filesGroups: [],
};

export const useNewComparationContextState = (): INewComparationContext => {
  const [compareQuery, setCompareQuery] = useState(defaultCompareQuery);

  const getFileGroup = useCallback(
    (fileId: string, filePath: string) => {
      const groupDefinition = compareQuery.filesGroups.find(
        fnFileMatch(fileId, filePath),
      );
      return groupDefinition ? groupDefinition.groupIndex : -1;
    },
    [compareQuery],
  );

  const updateFileNameGroup = useCallback(
    (fileId: string, filePath: string, groupIndex: number) => {
      if (getFileGroup(fileId, filePath) === groupIndex) return;
      setCompareQuery(
        immer(compareQuery, (draft) => {
          draft.filesGroups = draft.filesGroups.filter(
            (i) => !fnFileMatch(fileId, filePath)(i),
          );
          if (groupIndex !== -1) {
            draft.filesGroups.push({ fileId, filePath, groupIndex });
          }
        }),
      );
    },
    [getFileGroup, compareQuery],
  );

  useEffect(() => {
    const groupsCount = compareQuery.groupsCount;
    setCompareQuery(
      immer(compareQuery, (draft) => {
        draft.filesGroups = draft.filesGroups.filter(
          (i) => i.groupIndex <= groupsCount,
        );
      }),
    );
  }, [compareQuery.groupsCount]);

  const [canSubmitCompareRequest, setCanSubmitCompareRequest] = useState(false);

  useEffect(() => {
    const { filesGroups, groupsCount } = compareQuery;
    setCanSubmitCompareRequest(groupsCount > 0 && filesGroups.length > 1);
  }, [compareQuery.filesGroups]);

  const [
    currentVerticalRadioGroupScrollPosition,
    setCurrentVerticalRadioGroupScrollPosition,
  ] = useState(0);

  const submitCompareRequest = () => {};

  return {
    getFileGroup,
    compareQuery,
    setCompareQuery,
    updateFileNameGroup,
    submitCompareRequest,
    canSubmitCompareRequest,
    currentVerticalRadioGroupScrollPosition,
    setCurrentVerticalRadioGroupScrollPosition,
  };
};
