import Typography from "@material-ui/core/Typography";
import Editor from "@monaco-editor/react";
import React, { useCallback } from "react";
import { useSettingsContext } from "../CompactManagerSettingsContext";
import immer from "immer";
import debounce from "lodash.debounce";

export default function CompactManagerSettingsRenderer() {
  const { localConfig, setLocalConfig } = useSettingsContext();

  const setLocalConfigRenderesDefinition = useCallback(
    (value: string) => {
      if (!localConfig) return;
      try {
        const parsedConfig = JSON.parse(value);
        setLocalConfig(
          immer(localConfig, (draft) => void (draft.renderers = parsedConfig)),
        );
      } catch (_) {}
    },
    [localConfig],
  );

  const updateLocalConfigRenderesDefinition = useCallback(
    (value: string) => debounce(setLocalConfigRenderesDefinition, 300)(value),
    [setLocalConfigRenderesDefinition],
  );

  return (
    <section>
      <Typography noWrap variant="h6" children="Destacar Arquivos" />
      <Editor
        width="100%"
        height="26rem"
        theme="vs-dark"
        language="json"
        className="tw-overflow-hidden"
        value={JSON.stringify(localConfig?.renderers ?? [], null, 4)}
        onChange={(value) => updateLocalConfigRenderesDefinition(value ?? "")}
      />
    </section>
  );
}
