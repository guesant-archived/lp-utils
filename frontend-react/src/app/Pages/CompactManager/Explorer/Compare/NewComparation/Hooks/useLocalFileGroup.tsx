import { useEffect, useState } from "react";
import { useNewComparationContext } from "./NewComparationContext";

export const useLocalFileGroup = (fileId: string, filename: string) => {
  const { getFileGroup, updateFileNameGroup } = useNewComparationContext();

  const [localFileGroup, setLocalFileGroup] = useState(0);

  useEffect(
    () => void setLocalFileGroup(getFileGroup(fileId, filename)),
    [getFileGroup, fileId, filename],
  );

  const changeFileGroup = (groupIndex: number) => {
    updateFileNameGroup(fileId, filename, groupIndex);
  };

  return { changeFileGroup, localFileGroup };
};
