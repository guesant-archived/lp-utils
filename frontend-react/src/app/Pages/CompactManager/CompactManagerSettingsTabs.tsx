import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import { CompactManagerSettingsGeneral } from "./Settings/SettingsGeneral";
import { CompactManagerSettingsRenderer } from "./Settings/SettingsRenderer";
import { StyledCompactManagerSettingsTabs } from "./styles";

type ICompactManagerSettingsTabsProps = {
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
        </Tabs>
      </StyledCompactManagerSettingsTabs>
    </>
  );
}
