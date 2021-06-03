import Typography from "@material-ui/core/Typography";
import Editor from "@monaco-editor/react";
import immer from "immer";
import React from "react";
import { useSettingsContext } from "../CompactManagerSettingsContext";

export default function CompactManagerSettingsGeneral() {
  const { localConfig, setLocalConfig } = useSettingsContext();

  const updateLocalConfigQueryDefinition = (value: string) => {
    if (!localConfig) return;
    const updatedConfig = immer(
      localConfig,
      (draft) => void (draft.configQuery = value.split("\n")),
    );
    setLocalConfig(updatedConfig);
  };

  return (
    <section className="tw-flex tw-flex-col tw-gap-2">
      <Typography className="tw-flex-1" variant="h6" noWrap>
        Destacar Arquivos
      </Typography>
      <Editor
        width="100%"
        height="26rem"
        theme="vs-dark"
        language="ignore"
        className="tw-overflow-hidden"
        value={localConfig?.configQuery.join("\n")}
        onChange={(value) => updateLocalConfigQueryDefinition(value ?? "")}
      />
    </section>
  );
}
