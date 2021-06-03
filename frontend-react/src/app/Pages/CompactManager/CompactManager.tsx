import React from "react";
import CompactManagerSettings from "./CompactManagerSettings";
import { CompactManagerContent } from "./CompactManagerContent";
import { CompactManagerToolbar } from "./CompactManagerToolbar";
import { CompactManagerProvider } from "./Hooks/CompactManagerProvider";

export default function CompactManager() {
  return (
    <>
      <CompactManagerProvider>
        <div className="tw-h-full tw-overflow-hidden tw-flex tw-flex-col">
          <CompactManagerToolbar />
          <CompactManagerContent />
        </div>
        <CompactManagerSettings />
      </CompactManagerProvider>
    </>
  );
}
