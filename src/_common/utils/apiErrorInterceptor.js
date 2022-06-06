import axios from "axios";
import { trackError } from "../../_containerIntegration";

const apiErrorInterceptor = () => {
  axios.interceptors.response.use(
    (c) => c,
    // eslint-disable-next-line consistent-return
    (error) => {
      try {
        // for GET requests we log status 400 and 500 errors
        // NOTE not sure if we need to check Error and ErrorKey Null check
        if (error?.response?.config?.method === "get") {
          if (error.response.status === 400 || error.response.status === 500) {
            trackError({
              error,
              customData: [{ response: error.response }],
            });
          }
        }

        // For non GET requests, We only log status 500 errors to raygun
        else if (
          error?.response?.status === 500 &&
          error.response.config.method !== "get"
        ) {
          trackError({
            error,
            customData: [{ response: error.response }],
          });
        }
      } catch {
        // Intentionally ignoring error
        // catch block only here to preventing an error from bubbling to the UI
      }
      return Promise.reject(error);
    },
  );
};

export default apiErrorInterceptor;
