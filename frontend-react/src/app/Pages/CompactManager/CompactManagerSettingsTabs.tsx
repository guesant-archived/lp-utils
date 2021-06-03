import loadable from "@loadable/component";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import { StyledCompactManagerSettingsTabs, TabPanel } from "./styles";

const CompactManagerSettingsGeneral = loadable(
  () => import("./Settings/SettingsGeneral"),
);

export type ICompactManagerSettingsTabsProps = {
  currentTabIndex: number;
  handleCurrentTabChange: (value: number) => void;
};

export function CompactManagerSettingsTabs(
  props: ICompactManagerSettingsTabsProps,
) {
  const { currentTabIndex, handleCurrentTabChange } = props;
  return (
    <>
      <StyledCompactManagerSettingsTabs>
        <Tabs
          variant="scrollable"
          orientation="vertical"
          value={currentTabIndex}
          onChange={(_, idx) => handleCurrentTabChange(idx)}
        >
          <Tab label="Geral" />
        </Tabs>
        <TabPanel value={currentTabIndex} index={0}>
          <CompactManagerSettingsGeneral />
        </TabPanel>
      </StyledCompactManagerSettingsTabs>
    </>
  );
}
