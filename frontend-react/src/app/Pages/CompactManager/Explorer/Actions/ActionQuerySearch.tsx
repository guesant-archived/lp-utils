import TextField from "@material-ui/core/TextField";
import debounce from "lodash.debounce";
import React, { useCallback, useEffect, useState } from "react";
import { useCompactManagerContext } from "../../Hooks/useCompactManagerContext";

export function ActionQuerySearch() {
  const [tempSearchText, setTempSearchText] = useState("");
  const { searchFilesByName, setSearchFilesByName } =
    useCompactManagerContext();

  useEffect(
    () => void setTempSearchText(searchFilesByName ?? ""),
    [searchFilesByName],
  );

  const updateSearchFilesByName = useCallback(
    debounce((value: string) => {
      setSearchFilesByName(value.trim());
    }, 200),
    [],
  );

  useEffect(
    () => void updateSearchFilesByName(tempSearchText),
    [tempSearchText],
  );

  return (
    <TextField
      size="small"
      variant="outlined"
      className="tw-w-full"
      placeholder="Pesquisar arquivo..."
      value={tempSearchText}
      onChange={(e) => setTempSearchText(e.target.value)}
    />
  );
}
