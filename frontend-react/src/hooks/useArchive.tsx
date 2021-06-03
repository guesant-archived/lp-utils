import { useRef } from "react";
import { Archive } from "libarchive.js/main.js";

Archive.init({ workerUrl: import.meta.env.BASE_URL + "worker-bundle.js" });

export const useArchive = () => {
  const { current } = useRef(Archive);
  return current;
};
