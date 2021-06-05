import { DialogProps } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse, { CollapseProps } from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import immer from "immer";
import micromatch from "micromatch";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useArchive } from "../../../../../../hooks/useArchive";
import { useCompactManagerContext } from "../../../Hooks/useCompactManagerContext";
import { useFilterImportantFiles } from "../../../Hooks/useFilterImportantFiles";
import { useNewComparationContext } from "./Hooks/NewComparationContext";
import { fnFileMatch } from "./Hooks/fnFileMatch";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

const getSelectFilesRenderValue = (selected: string[]) =>
  selected.length > 0
    ? `${selected.length} selecionado` + (selected.length === 1 ? "" : "s")
    : "Nenhum arquivo selecionado";

export function MassGroupApplyDialog({
  onClose: _onClose,
  ...props
}: DialogProps) {
  const [selectedFilesId, setSelectedFilesId] = useState<string[]>([]);
  const [selectedGroup, setSelectedGroup] = useState(-1);
  const [filePattern, setFilePattern] = useState("**/*");

  const onClose = () => {
    setFilePattern("**/*");
    setSelectedGroup(-1);
    setSelectedFilesId([]);
    (_onClose as any)();
  };

  const { openedFiles } = useCompactManagerContext();

  const { compareQuery, getFileGroup, setCompareQuery } =
    useNewComparationContext();

  const Archive = useArchive();

  const { filter } = useFilterImportantFiles();

  async function applyFileGroups() {
    const openedFilesIdAntMatchedContent = await Promise.all(
      openedFiles
        .filter((i) => selectedFilesId.includes(i.id))
        .map(async (i) => {
          const archive = await Archive.open(i.file);
          const fullPathFiles = (await archive.getFilesArray()).map(
            (i: any) => i.file._path,
          );
          const matchedFullPathFiles = micromatch(
            filter(fullPathFiles),
            filePattern,
            { dot: true },
          );
          return [i.id, matchedFullPathFiles] as const;
        }),
    );

    setCompareQuery(
      immer(compareQuery, (draft) => {
        for (const openedFileAndMatchedContent of openedFilesIdAntMatchedContent) {
          const [fileId, matchedFullPathFiles] = openedFileAndMatchedContent;
          for (const filePath of matchedFullPathFiles) {
            if (getFileGroup(fileId, filePath) === selectedGroup) continue;
            draft.filesGroups = draft.filesGroups.filter(
              (i) => !fnFileMatch(fileId, filePath)(i),
            );
            if (selectedGroup !== -1) {
              draft.filesGroups.push({
                fileId,
                filePath,
                groupIndex: selectedGroup,
              });
            }
          }
        }
      }),
    );
  }

  const handleApply = (closeAfterEnd: boolean) => async () => {
    try {
      await applyFileGroups();
    } catch (_) {}
    closeAfterEnd && (onClose as any)();
  };

  return (
    <Dialog fullWidth maxWidth="sm" onClose={onClose} {...props}>
      <DialogTitle>Agrupar Arquivos em Massa</DialogTitle>
      <DialogContent>
        <MassGroupApply
          filePattern={filePattern}
          selectedGroup={selectedGroup}
          setFilePattern={setFilePattern}
          selectedFilesId={selectedFilesId}
          setSelectedGroup={setSelectedGroup}
          setSelectedFilesId={setSelectedFilesId}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={handleApply(false)}
          disabled={!selectedFilesId.length}
          children="Aplicar"
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleApply(true)}
          disabled={!selectedFilesId.length}
          children="Aplicar e Sair"
        />
      </DialogActions>
    </Dialog>
  );
}

type MassGroupApplyProps = {
  setSelectedFilesId: any;
  filePattern: any;
  setFilePattern: any;
  selectedGroup: any;
  setSelectedGroup: any;
  selectedFilesId: any;
};

export default function MassGroupApply(props: MassGroupApplyProps) {
  const {
    filePattern,
    selectedGroup,
    setFilePattern,
    selectedFilesId,
    setSelectedGroup,
    setSelectedFilesId,
  } = props;

  const { openedFiles } = useCompactManagerContext();
  const [[idLabelSelectedOpenedFiles, idLabelSelectedGroups]] = React.useState(
    () => [nanoid(), nanoid()] as const,
  );

  const {
    compareQuery: { groupsCount },
  } = useNewComparationContext();

  const handleSelectedFilesChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setSelectedFilesId(event.target.value as string[]);
  };

  return (
    <>
      <div className="tw-flex tw-flex-wrap tw-gap-2">
        <div className="tw-flex-1">
          <TextField
            size="small"
            variant="outlined"
            value={filePattern}
            label="Glob Pattern"
            className="tw-w-full"
            onFocus={(e) => e.target.select()}
            onChange={(e) => setFilePattern(e.target.value)}
          />
        </div>
        <div className="tw-flex-1">
          <FormControl className="tw-w-full" size="small" variant="outlined">
            <Select
              labelId={idLabelSelectedGroups}
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value as number)}
            >
              {Array.from({ length: groupsCount })
                .map((_, i) => i + 1)
                .map((idx) => (
                  <MenuItem key={idx} value={idx}>
                    Grupo {idx}
                  </MenuItem>
                ))}
              {groupsCount > 0 && <Divider />}
              <MenuItem value={-1}>Desabilitado</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="tw-flex-1">
          <FormControl className="tw-w-full" size="small" variant="outlined">
            <Select
              multiple
              value={selectedFilesId}
              labelId={idLabelSelectedOpenedFiles}
              onChange={handleSelectedFilesChange}
              renderValue={(selected) =>
                getSelectFilesRenderValue(selected as string[])
              }
            >
              {openedFiles.map(({ id, file }) => (
                <MenuItem key={id} value={id}>
                  <Checkbox checked={selectedFilesId.indexOf(id) > -1} />
                  {file.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
}
