import React from "react";

export function StyledCompactExplorerSideBar({ children }: any) {
  return (
    <div className="tw-overflow-hidden tw-h-full tw-flex tw-flex-col">
      {children}
    </div>
  );
}
