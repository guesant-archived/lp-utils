import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { useSettingsContext } from "./CompactManagerSettingsContext";

export type ICompactManagerSettingsHeaderProps = {
  onClose: () => void;
};

export function CompactManagerSettingsHeader(
  props: ICompactManagerSettingsHeaderProps,
) {
  const { onClose } = props;
  const { hasConfigChanged, saveLocalDefinition } = useSettingsContext();

  return (
    <>
      <div className="tw-w-full tw-flex tw-items-center tw-pr-4">
        <div className="tw-flex-1">
          <DialogTitle>Configurações</DialogTitle>
        </div>
        <div>
          <Button
            color="primary"
            variant="contained"
            disabled={!hasConfigChanged}
            onClick={saveLocalDefinition}
            children={
              hasConfigChanged ? "Salvar Alterações" : "Alterações Salvas"
            }
          />
          <IconButton onClick={onClose} color="default">
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}
