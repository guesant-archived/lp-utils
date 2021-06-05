import TextField from "@material-ui/core/TextField";
import immer from "immer";
import React, { useEffect, useState } from "react";
import { useNewComparationContext } from "./Hooks/NewComparationContext";

const useGroupsCountState = () => {
  const [inputValue, setInputValue] = useState(0);
  const { compareQuery, setCompareQuery } = useNewComparationContext();

  useEffect(
    () => void setInputValue(compareQuery.groupsCount),
    [compareQuery.groupsCount],
  );

  const updateGroupsCount = (groupsCount: number) => {
    setCompareQuery(
      immer(
        compareQuery,
        (draft) => void (draft.groupsCount = Math.max(groupsCount, 0)),
      ),
    );
  };

  return { inputValue, setInputValue, updateGroupsCount };
};

export default function GroupsCount() {
  const { inputValue, setInputValue, updateGroupsCount } =
    useGroupsCountState();

  return (
    <div className="tw-flex tw-items-center tw-gap-2">
      <span>Qntd.Grupos: </span>
      <TextField
        size="small"
        type="number"
        placeholder="0"
        variant="outlined"
        value={inputValue}
        InputProps={{ min: 0 } as any}
        className="tw-min-w-0 tw-w-24"
        onFocus={(e) => e.target.select()}
        onChange={(e) => setInputValue(+e.target.value)}
        onBlur={(e) => updateGroupsCount(+e.target.value)}
      />
    </div>
  );
}
