import StarsIcon from "@material-ui/icons/Stars";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import immer from "immer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompactManagerConfig,
  setConfig,
} from "../../../../../store/compactManagerSlice";
import { ICompactManagerViewModesState } from "../../../../../store/ICompactManagerState";

const MODE_ALL = "all";
const MODE_IMPORTANT = "important";

const getToggleButtonGroupValueForMode = (
  viewMode: ICompactManagerViewModesState,
) => (viewMode === MODE_IMPORTANT ? [MODE_IMPORTANT] : []);

export function ActionQueryToggleViewMode() {
  const dispatch = useDispatch();
  const config = useSelector(getCompactManagerConfig);
  const { viewMode } = config;

  const updateMode = (isImportantMode: boolean) => {
    dispatch(
      setConfig(
        immer(config, (draft) => {
          draft.viewMode = isImportantMode ? MODE_IMPORTANT : MODE_ALL;
        }),
      ),
    );
  };

  return (
    <ToggleButtonGroup
      size="small"
      onChange={(_, arr) => updateMode(arr.includes(MODE_IMPORTANT))}
      value={getToggleButtonGroupValueForMode(viewMode)}
      children={
        <ToggleButton value={MODE_IMPORTANT} children={<StarsIcon />} />
      }
    />
  );
}
