import { useNewComparationContext } from "./NewComparationContext";
import { useLocalFileGroup } from "./useLocalFileGroup";
import { useScrollRef } from "./useScrollRef";

export const useOpenedFileSelectGroupState = (
  fileId: string,
  filename: string,
) => {
  const {
    compareQuery: { groupsCount },
  } = useNewComparationContext();

  const { localFileGroup, changeFileGroup } = useLocalFileGroup(
    fileId,
    filename,
  );

  const { ref, updateStateScrollPosition } = useScrollRef();

  return {
    ref,
    groupsCount,
    localFileGroup,
    changeFileGroup,
    updateStateScrollPosition,
  };
};
