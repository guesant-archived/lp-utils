import { Dispatch, SetStateAction } from "react";
import { IArchiveRecord } from "./IArchiveRecord";

export type IHomeContextState = {
  archives: IArchiveRecord[];
  viewMode: "all" | "important";
  setArchives: ISetState<IHomeContextState["archives"]>;
  setViewMode: ISetState<IHomeContextState["viewMode"]>;
};

type ISetState<T> = Dispatch<SetStateAction<T>>;
