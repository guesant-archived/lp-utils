import { createContext } from "react";
import { ICompactManagerContext } from "./ICompactManagerContext";

export const CompactManagerContext = createContext<ICompactManagerContext>(
  {} as any,
);
