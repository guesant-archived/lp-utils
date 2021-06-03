import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import React from "react";
import { useCompactManagerContext } from "../../Hooks/useCompactManagerContext";

export function ActionCloseAllArchives() {
  const { setOpenedFiles } = useCompactManagerContext();
  const handleClick = () => setOpenedFiles([]);
  return (
    <>
      <List dense>
        <ListItem dense>
          <Button
            className="tw-w-full"
            onClick={handleClick}
            startIcon={<ClearAllIcon />}
            children={"Fechar todos os arquivos"}
          />
        </ListItem>
      </List>
    </>
  );
}
