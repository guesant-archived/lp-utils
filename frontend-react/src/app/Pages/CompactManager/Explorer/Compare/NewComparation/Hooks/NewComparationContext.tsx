import React, { createContext, useContext } from "react";
import { ICompareQuery } from "./ICompareQuery";
import { useNewComparationContextState } from "./useComparationNewContextState";

export type INewComparationContext = {
  compareQuery: ICompareQuery;
  setCompareQuery: (compareQuery: ICompareQuery) => void;

  getFileGroup: (fileId: string, filePath: string) => number;
  updateFileNameGroup: (
    fileId: string,
    filePath: string,
    groupIndex: number,
  ) => void;

  submitCompareRequest: () => void;
  canSubmitCompareRequest: boolean;

  currentVerticalRadioGroupScrollPosition: number;
  setCurrentVerticalRadioGroupScrollPosition: (v: number) => void;
};

export const NewComparationContext = createContext<INewComparationContext>(
  {} as any,
);

export const NewComparationContextProvider: React.FC = ({ children }) => {
  const state = useNewComparationContextState();
  return <NewComparationContext.Provider children={children} value={state} />;
};

export const useNewComparationContext = () => useContext(NewComparationContext);
