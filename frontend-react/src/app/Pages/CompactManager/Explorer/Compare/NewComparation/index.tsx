import React from "react";
import NewComparationFooter from "./Footer";
import { NewComparationHeader } from "./Header";
import { NewComparationContextProvider } from "./Hooks/NewComparationContext";
import OpenedFileList from "./OpenedFileList";

export default function NewComparation() {
  return (
    <>
      <NewComparationContextProvider>
        <div className="tw-h-full tw-overflow-hidden tw-flex tw-flex-col">
          <NewComparationHeader />
          <div className="tw-h-full tw-flex-1 tw-overflow-auto">
            <div className="tw-px-4">
              <OpenedFileList />
            </div>
          </div>
          <NewComparationFooter />
        </div>
      </NewComparationContextProvider>
    </>
  );
}
