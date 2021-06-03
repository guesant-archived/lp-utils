export type ICompactManagerViewModesState = "all" | "important";

export type IRendererDefinitions = IRendererDefinition[];

export type IRendererDefinition = {
  pattern: string | string[];
  renderer: string | string[];
};

export type ICompactManagerState = {
  config: {
    configQuery: string[];
    renderers: IRendererDefinitions;
    viewMode: ICompactManagerViewModesState;
  };
};
