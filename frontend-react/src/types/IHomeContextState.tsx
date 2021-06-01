import { Dispatch, SetStateAction } from "react";
import { IArchiveRecord } from "./IArchiveRecord";

export type IHomeContextState = {
  archives: IArchiveRecord[];
  setArchives: ISetState<IHomeContextState["archives"]>;
};

type ISetState<T> = Dispatch<SetStateAction<T>>;
