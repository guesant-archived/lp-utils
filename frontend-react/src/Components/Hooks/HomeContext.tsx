import { createContext } from "react";
import { IHomeContextState } from "../../types/IHomeContextState";

export const HomeContext = createContext<IHomeContextState>({} as any);
