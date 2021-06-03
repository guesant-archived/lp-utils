export type ICompactManagerViewModesState = "all" | "important";

export type ICompactManagerState = {
  config: {
    configQuery: string[];
    viewMode: ICompactManagerViewModesState;
  };
};
