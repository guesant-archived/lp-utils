import React, { FC, Fragment, useState } from "react";
import { IHomeContextState as IState } from "../../types/IHomeContextState";
import { HomeContext } from "./HomeContext";

export const HomeContextProvider: FC = ({ children }) => {
  const [archives, setArchives] = useState<IState["archives"]>([]);
  const [viewMode, setViewMode] = useState<IState["viewMode"]>("important");

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
