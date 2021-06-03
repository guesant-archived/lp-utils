import { createStyles, makeStyles } from "@material-ui/core";

export const useStylesOpenArchive = makeStyles(
  createStyles({
    dropzone: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderWidth: "2px",
      borderRadius: "2px",
      borderColor: "#eeeeee",
      borderStyle: "dashed",
      backgroundColor: "#fafafa",
      color: "#bdbdbd",
      outline: "none",
      outlineColor: "currentcolor",
    },
    dropzoneButton: {
      padding: "14px 16px",
    },
  }),
);
