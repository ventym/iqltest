import axios from 'axios';

const ergastAxiosRequestConfig = {
  baseURL: 'https://ergast.com/api/f1',
  timeout: 15000,
};

export const ergastApi = axios.create(ergastAxiosRequestConfig);

if (__DEV__) {
  ergastApi.interceptors.request.use(
    (request) => {
      console.log('[ergastApi request]', request);
      return request;
    },
    (error) => {
      console.log('[ergastApi request error]', error);
      throw error;
    },
  );

  ergastApi.interceptors.response.use(
    (response) => {
      console.log('[ergastApi response]', response);
      return response;
    },
    (error) => {
      console.log('[ergastApi response error]', error);
      throw error;
    },
  );
}
