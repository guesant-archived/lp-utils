import { createSlice } from "@reduxjs/toolkit";
import { ICompactManagerState } from "./ICompactManagerState";
import { IStoreState } from "./IStoreState";

const initialState: ICompactManagerState = {
  config: {
    viewMode: "important",
    importantFilesDefinition: [
    ],
  },
};

export const compactManagerSlice = createSlice({
  name: "compactManager",
  initialState,
  reducers: {
    setConfig(state, action) {
      state.config = action.payload;
    },
  },
});

export const { setConfig } = compactManagerSlice.actions;

export default compactManagerSlice.reducer;

export const getCompactManagerConfig = (state: IStoreState) =>
  state.compactManager.config;
