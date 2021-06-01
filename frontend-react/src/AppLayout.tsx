import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

const AppLayout: React.FC = ({ children }) => {
  return (
    <div className="tw-h-full tw-flex tw-flex-col">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Auxiliar de Compactação
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="tw-flex-1">{children}</div>
    </div>
  );
};

export default AppLayout;
