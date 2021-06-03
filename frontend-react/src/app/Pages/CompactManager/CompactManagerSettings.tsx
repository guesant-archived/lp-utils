import Dialog from "@material-ui/core/Dialog";
import React from "react";
import { CompactManagerSettingsHeader } from "./CompactManagerSettingsHeader";
import { useCompactManagerContext } from "./Hooks/useCompactManagerContext";

export default function CompactManagerSettings() {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

  const { isSettingsModalOpen, setIsSettingsModalOpen } =
    useCompactManagerContext();

  const closeSettingsModal = () => setIsSettingsModalOpen(false);

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={isSettingsModalOpen}
      onClose={closeSettingsModal}
    >
      <CompactManagerSettingsHeader onClose={closeSettingsModal} />
    </Dialog>
  );
}
