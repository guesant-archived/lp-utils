import { createContext } from "react";
import { IHomeContextState } from "./IHomeContextState";

export const HomeContext = createContext<IHomeContextState>({} as any);
