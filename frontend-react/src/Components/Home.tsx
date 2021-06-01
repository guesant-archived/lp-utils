import React from "react";
import { HomeContent } from "./HomeContent";
import { HomeToolbar } from "./HomeToolbar";
import { HomeContextProvider } from "./Hooks/HomeContextProvider";

function Home() {
  return (
    <HomeContextProvider>
      <div className="tw-h-full tw-overflow-hidden tw-flex tw-flex-col">
        <HomeToolbar />
        <HomeContent />
      </div>
    </HomeContextProvider>
  );
}

export default Home;
