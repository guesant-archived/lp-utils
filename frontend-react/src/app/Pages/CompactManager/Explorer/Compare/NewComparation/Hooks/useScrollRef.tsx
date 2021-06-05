import { debounce } from "lodash";
import { useCallback, useEffect, useRef } from "react";
import { useNewComparationContext } from "./NewComparationContext";

export const useScrollRef = () => {
  const ref = useRef<HTMLDivElement>();

  const {
    currentVerticalRadioGroupScrollPosition,
    setCurrentVerticalRadioGroupScrollPosition,
  } = useNewComparationContext();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = currentVerticalRadioGroupScrollPosition;
    }
  }, [ref, currentVerticalRadioGroupScrollPosition]);

  const updateStateScrollPosition = useCallback(
    debounce((scrollLeft: number) => {
      setCurrentVerticalRadioGroupScrollPosition(scrollLeft);
    }, 200),
    [],
  );

  return { ref, updateStateScrollPosition };
};
