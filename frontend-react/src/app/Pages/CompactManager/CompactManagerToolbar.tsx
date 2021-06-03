import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import { useCompactManagerContext } from "./Hooks/useCompactManagerContext";

export function CompactManagerToolbar() {
  const { setIsSettingsModalOpen } = useCompactManagerContext();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className="tw-flex-1" variant="h6" noWrap>
          Auxiliar de Compactação
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          children={<SettingsIcon />}
          onClick={() => setIsSettingsModalOpen(true)}
        />
      </Toolbar>
    </AppBar>
  );
}
