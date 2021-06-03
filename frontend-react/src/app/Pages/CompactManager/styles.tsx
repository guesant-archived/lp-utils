import React from "react";

export const TabPanel: React.FC<{ value: number; index: number }> = (props) => {
  const { value, index, children } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && children}
    </div>
  );
};

export function StyledCompactManagerSettingsTabs({ children }: any) {
  return (
    <div
      style={{ gridTemplateColumns: "auto 1fr" }}
      className="tw-grid tw-gap-4 tw-px-4 tw-pb-4 tw-w-full"
      children={children}
    />
  );
}
