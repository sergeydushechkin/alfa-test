import axios, {AxiosInstance} from "axios";

const SERVER = `https://api.nasa.gov/planetary`;
const TIMEOUT = 5000;

export const createAPI = (onError: (Error) => void): AxiosInstance => {
  const api = axios.create({
    baseURL: `${SERVER}`,
    timeout: TIMEOUT,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if (err.response && err.response.config.method === `post`) {
      throw err;
    }

    onError(err);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
