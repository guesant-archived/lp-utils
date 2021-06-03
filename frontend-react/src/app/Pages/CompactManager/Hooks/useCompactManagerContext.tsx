import { useContext } from "react";
import { CompactManagerContext } from "./CompactManagerContext";

export const useCompactManagerContext = () => {
  return useContext(CompactManagerContext);
};
