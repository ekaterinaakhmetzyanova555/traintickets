import React from "react";
import i18n from "i18next";
import {
  CloseSnackbar,
  EnqueueSnackbar,
} from "_containerIntegration";
import { Button } from "@material-ui/core";
import apiErrorMapper from "./apiErrorMapper";

export const ENQUEUE_SNACKBAR = "ENQUEUE_SNACKBAR";
/**
 *
 * @param {object} error The error object returned by the API
 * @param {string or null} nameSpace A string with the name of i18n namespace the error belongs to
 * @param {object} interpolationVariables An object containing the variables
 */
export default function apiErrorHandler(
  error,
  nameSpace,
  interpolationVariables,
) {
  const ns = nameSpace || "";
  // plucks out only the error string from the apiResponse
  const errorString = apiErrorMapper(error);
  // return the translated error text for EnqueueSnackbar to display
  const errorMessage = i18n.t(
    [
      `${ns}:error.api.${errorString}`,
      `${ns}:error.api.generic`,
      `error.api.${errorString}`,
      `error.api.generic`,
    ],
    { ...interpolationVariables, nsSeparator: ">" }, // Replace namespace colon when error message contains colon
  );

  // do not persist alert if error is generic
  const isPersistent = errorMessage !== i18n.t("error.api.generic");

  const action = isPersistent
    ? (key) => (
        // eslint-disable-next-line react/jsx-filename-extension
        <Button onClick={() => CloseSnackbar(key)}>
          {i18n.t("EnqueueSnackbar.dismiss.button")}
        </Button>
      )
    : null;

  EnqueueSnackbar(errorMessage, {
    variant: "error",
    persist: isPersistent,
    action,
  });

  // return needed to handle alerts triggered through observables
  return {
    type: ENQUEUE_SNACKBAR,
  };
}
