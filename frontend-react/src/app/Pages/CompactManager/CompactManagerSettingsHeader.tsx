import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

export type ICompactManagerSettingsHeaderProps = {
  onClose: () => void;
};

export function CompactManagerSettingsHeader(
  props: ICompactManagerSettingsHeaderProps,
) {
  const { onClose } = props;
  return (
    <>
      <div className="tw-w-full tw-flex tw-items-center tw-pr-4">
        <div className="tw-flex-1">
          <DialogTitle>Configurações</DialogTitle>
        </div>
        <IconButton onClick={onClose} color="default">
          <CloseIcon />
        </IconButton>
      </div>
    </>
  );
}
