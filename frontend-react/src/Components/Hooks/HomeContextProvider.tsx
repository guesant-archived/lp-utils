import React, { FC, Fragment } from "react";
import { HomeContext } from "./HomeContext";
import { IHomeContextState } from "./IHomeContextState";

export const HomeContextProvider: FC = ({ children }) => {

  return (
    <Fragment
      children={
        <HomeContext.Provider
          value={{
            archives,
            viewMode,
            setViewMode,
            setArchives,
          }}
          children={children}
        />
      }
    />
  );
};
