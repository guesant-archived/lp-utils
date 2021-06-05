import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";
import { useOpenedFileSelectGroupState } from "./Hooks/useOpenedFileSelectGroupState";

type OpenedFileSelectGroupProps = { fileId: string; filename: string };

export default function OpenedFileSelectGroup(
  props: OpenedFileSelectGroupProps,
) {
  const { fileId, filename } = props;

  const {
    ref,
    groupsCount,
    localFileGroup,
    changeFileGroup,
    updateStateScrollPosition,
  } = useOpenedFileSelectGroupState(fileId, filename);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeFileGroup(+event.target.value);
  };

  return (
    <>
      <RadioGroup
        ref={ref}
        value={localFileGroup}
        onChange={handleChange}
        className="tw-flex tw-overflow-auto tw-items-center"
        style={{ flexDirection: "row", flexWrap: "nowrap" }}
        onScroll={(e) =>
          updateStateScrollPosition((e.target as HTMLDivElement).scrollLeft)
        }
      >
        {Array.from({ length: groupsCount })
          .map((_, i) => i + 1)
          .map((idx) => (
            <Radio key={idx} value={idx} />
          ))}
        <div>|</div>
        <IconButton onClick={() => changeFileGroup(-1)}>
          <HighlightOffIcon />
        </IconButton>
      </RadioGroup>
    </>
  );
}
