import { createSlice } from "@reduxjs/toolkit";
import { formatCompactManagerConfig } from "../utils/formatCompactManagerConfig";
import { ICompactManagerState } from "./ICompactManagerState";
import { IStoreState } from "./IStoreState";

const initialState: ICompactManagerState = {
  config: {
    viewMode: "important",
    configQuery: [
    ],
  },
};

export const compactManagerSlice = createSlice({
  name: "compactManager",
  initialState,
  reducers: {
    setConfig(state, action) {
      state.config = formatCompactManagerConfig(action.payload);
    },
  },
});

export const { setConfig } = compactManagerSlice.actions;

export default compactManagerSlice.reducer;

export const getCompactManagerConfig = (state: IStoreState) =>
  state.compactManager.config;
