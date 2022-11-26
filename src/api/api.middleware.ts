import axios, { Method } from "axios";

import { API_PATH } from "constants/api.constants";

interface apiMiddlewareInterface {
  method: Method;
  ednpoint: string;
  data?: any;
}

axios.interceptors.response.use((response) => {
  return response;
});

export const apiMiddleware = async <T>({
  method,
  ednpoint,
  data,
}: apiMiddlewareInterface): Promise<[T | null, any, any]> => {
  return new Promise((resolve) => {
    return axios({
      method,
      url: API_PATH + ednpoint,
      data,
    })
      .then(({ data, status }) => resolve([data, null, status]))
      .catch((error) => {
        return resolve([null, error, null]);
      });
  });
};
