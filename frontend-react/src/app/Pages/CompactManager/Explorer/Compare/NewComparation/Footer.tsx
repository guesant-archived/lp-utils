import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import React from "react";
import { useNewComparationContext } from "./Hooks/NewComparationContext";

export default function NewComparationFooter() {
  const { canSubmitCompareRequest, submitCompareRequest } =
    useNewComparationContext();
  return (
    <>
      <Divider />
      <div className="tw-px-2 tw-py-2">
        <div className="tw-flex tw-justify-end">
          <Button
            color="primary"
            variant="contained"
            children="Iniciar Comparação"
            disabled={!canSubmitCompareRequest}
            onClick={() => submitCompareRequest()}
          />
        </div>
      </div>
    </>
  );
}
