import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import React, { useState } from "react";
import GroupsCount from "./GroupsCount";
import { MassGroupApplyDialog } from "./MassGroupApply";

export function NewComparationHeader() {
  const [isToolBoxOpened, showToolBox] = useState(false);

  return (
    <>
      <div className="tw-px-4 tw-my-4">
        <Box fontSize="h6.fontSize">
          <h1>Indexador de Similaridade</h1>
        </Box>
      </div>
      <Divider />
      <div className="tw-w-full tw-px-4 tw-my-4 tw-flex tw-justify-end  tw-gap-2  tw-items-center">
        <div className="tw-py-3 tw-flex">
          <GroupsCount />
          <IconButton onClick={() => showToolBox(!isToolBoxOpened)}>
            <WbIncandescentIcon />
          </IconButton>
        </div>
      </div>
      <Divider />
      <MassGroupApplyDialog
        open={isToolBoxOpened}
        onClose={() => showToolBox(false)}
      />
    </>
  );
}
