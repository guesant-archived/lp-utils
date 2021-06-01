import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

export function HomeToolbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Auxiliar de Compactação
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
