export const NETWORK_ERROR = "Network Error";
/**
 * Checks the err object to see if it contains the property validation error, or just a string error property.
 * If neither exists, it returns undefined.
 * The return value is passed as an argument to 'queueAlert'.
 * @param { Object } err
 * */
const apiErrorMapper = (err) => {
  // API v2 standard mapping
  if (err?.response?.data?.errors) {
    return err.response.data.errors[0];
  }
  if (err?.response?.data?.validationResult) {
    return err.response.data.validationResult[0];
  }
  if (err?.response?.data?.error) {
    return err.response.data.error;
  }
  if (err?.response?.data?.message) {
    return err.response.data.message;
  }
  if (err?.message === NETWORK_ERROR) {
    return err.message;
  }
  if (err?.data?.reason) {
    return err.data.reason;
  }
  if (err?.response?.data?.fieldErrors?.length) {
    return err.response.data.fieldErrors[0].error;
  }
  return undefined;
};

export default apiErrorMapper;
