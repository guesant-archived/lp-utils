import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import BackupIcon from "@material-ui/icons/Backup";
import { nanoid } from "nanoid";
import React, { useCallback, useContext } from "react";
import { HomeContext } from "../../Hooks/HomeContext";
import { promptSelectFiles } from "../../helpers/promptSelectFiles";

export function ActionsImportFiles() {
  const { setArchives } = useContext(HomeContext);

  const handleFileOpen = useCallback(async () => {
    try {
      const files = await promptSelectFiles();
      setArchives(files.map((file) => ({ file, id: nanoid() })));
    } catch (_) {}
  }, []);

  return (
    <>
      <List>
        <ListItem dense>
          <div
            className="tw-w-full tw-flex tw-justify-end"
            children={
              <>
                <IconButton
                  color="default"
                  onClick={handleFileOpen}
                  children={<BackupIcon />}
                  aria-label="Abrir Arquivo"
                />
              </>
            }
          />
        </ListItem>
      </List>
    </>
  );
}
