import immer from "immer";
import { ICompactManagerState } from "../store/ICompactManagerState";

export const formatCompactManagerConfig = (
  config: ICompactManagerState["config"],
) =>
  immer(config, (draft) => {
    draft.configQuery = draft.configQuery
      .map((i) => i.trim())
      .filter((i) => i.length > 0);
  });
