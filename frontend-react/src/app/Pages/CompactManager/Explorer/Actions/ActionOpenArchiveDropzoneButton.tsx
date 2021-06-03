import Button, { ButtonProps } from "@material-ui/core/Button";
import BackupIcon from "@material-ui/icons/Backup";
import clsx from "clsx";
import React from "react";
import { DropzoneState } from "react-dropzone";
import { useStylesOpenArchive } from "./styles";

export type IActionOpenArchiveDropzoneButtonProps = {
  dropState: DropzoneState;
};

const StyledActionOpenArchiveDropzoneButton: React.FC<{} & ButtonProps> = ({
  ...props
}) => {
  const styles = useStylesOpenArchive();
  return (
    <Button
      className={clsx("tw-w-full tw-h-full", styles.dropzoneButton)}
      {...props}
    />
  );
};

export function ActionOpenArchiveDropzoneButton(
  props: IActionOpenArchiveDropzoneButtonProps,
) {
  const {
    dropState: { isDragActive },
  } = props;

  return (
    <>
      <StyledActionOpenArchiveDropzoneButton
        onDrop={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        {...(isDragActive
          ? { children: <p>Solte Aqui</p> }
          : { startIcon: <BackupIcon />, children: <p>Abrir Arquivo</p> })}
      />
    </>
  );
}
