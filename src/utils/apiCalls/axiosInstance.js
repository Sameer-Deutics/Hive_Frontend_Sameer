import axios from "axios";

const axiosInstance = (tempAccessToken) => {
  const authAccessToken =
    tempAccessToken || window.localStorage.getItem("access_token");

  const axiosInst = axios.create({
    baseURL:
      import.meta.env.VITE_NODE_ENV === "production"
        ? `${import.meta.env.VITE_PRODUCTION_SERVER}/api/v1`
        : `${import.meta.env.VITE_DEVELOPMENT_SERVER}/api/v1`,
    timeout: 99999999,
    headers: {
      Authorization: authAccessToken ? `Bearer ${authAccessToken}` : null,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  axiosInst.interceptors.response.use(
    (response) => {
      // Any status code from range of 2xx
      // Do something with response data
      return response;
    },
    (error) => {
      // Any status codes outside range of 2xx
      // Do something with response error
      return Promise.reject(error);
    }
  );

  axiosInst.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.url = config.url.replace(config.baseURL, "");
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  return axiosInst;
};

export default axiosInstance;
