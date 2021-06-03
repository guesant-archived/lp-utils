import React from "react";

export function StyledCompactExplorerSideBar({ children }: any) {
  return (
    <div className="tw-overflow-hidden tw-flex tw-flex-col">{children}</div>
  );
}

export function StyledCompactExporer({ children }: any) {
  return (
    <div
      style={{ gridTemplateColumns: "360px auto 1fr" }}
      className="tw-h-full tw-grid tw-overflow-y-hidden"
      children={children}
    />
  );
}
