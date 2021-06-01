import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import React, { useContext } from "react";
import { HomeContext } from "../../Hooks/HomeContext";

function RemoveOpenedArchives() {
  const { setArchives } = useContext(HomeContext);
  return (
    <ButtonGroup
      color="primary"
      children={
        <IconButton
          color="default"
          children={<ClearAllIcon />}
          onClick={() => setArchives([])}
          aria-label="Fechar Arquivos Abertos"
        />
      }
    />
  );
}

export function ActionsOpenedContents() {
  return (
    <>
      <List>
        <ListItem dense className="tw-flex tw-gap-2">
          <div className="tw-flex tw-justify-end">
            <RemoveOpenedArchives />
          </div>
        </ListItem>
      </List>
    </>
  );
}
