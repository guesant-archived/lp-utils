import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import StarsIcon from "@material-ui/icons/Stars";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React, { useContext } from "react";
import { HomeContext } from "../../Hooks/HomeContext";

const MODE_ALL = "all";
const MODE_IMPORTANT = "important";

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

function ToggleViewMode() {
  const { viewMode, setViewMode } = useContext(HomeContext);

  const handleFormat = (_: any, arr: string[]) => {
    setViewMode(arr.includes(MODE_IMPORTANT) ? MODE_IMPORTANT : MODE_ALL);
  };

  return (
    <ToggleButtonGroup
      onChange={handleFormat}
      value={viewMode === MODE_IMPORTANT ? [MODE_IMPORTANT] : []}
      children={
        <ToggleButton value={MODE_IMPORTANT} children={<StarsIcon />} />
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
            <ToggleViewMode />
          </div>
        </ListItem>
      </List>
    </>
  );
}
