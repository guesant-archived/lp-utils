import equal from "fast-deep-equal";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompactManagerConfig,
  setConfig,
} from "../../../store/compactManagerSlice";
import { ICompactManagerState } from "../../../store/ICompactManagerState";

export type ISettingsContextState = {
  hasConfigChanged: boolean;
  saveLocalDefinition: () => void;
  localConfig: ICompactManagerState["config"] | null;
  setLocalConfig: (config: ICompactManagerState["config"]) => void;
};

export const SettingsContext = createContext<ISettingsContextState>({} as any);

export const useSettingsContext = () => useContext(SettingsContext);

export const SettingsContextProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const config = useSelector(getCompactManagerConfig);
  const [localConfig, setLocalConfig] =
    useState<ICompactManagerState["config"] | null>(null);
  const [hasConfigChanged, setHasConfigChanged] = useState(false);

  const saveLocalDefinition = useCallback(
    () => void dispatch(setConfig(localConfig)),
    [config, localConfig],
  );

  useEffect(
    () => setHasConfigChanged(!equal(config, localConfig)),
    [config, localConfig],
  );

  useEffect(() => void setLocalConfig(config), [config]);

  return (
    <>
      <SettingsContext.Provider
        value={{
          localConfig,
          setLocalConfig,
          hasConfigChanged,
          saveLocalDefinition,
        }}
        children={children}
      />
    </>
  );
};
