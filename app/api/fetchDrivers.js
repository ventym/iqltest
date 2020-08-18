import { ergastApi } from './ergastApi';

export const DRIVERS_PER_PAGE = 30;

export const fetchDrivers = async ({ pageIndex }) => {
  try {
    const requestConfig = {
      method: 'get',
      url: '/drivers.json',
      params: {
        offset: pageIndex,
        limit: DRIVERS_PER_PAGE,
      },
    };

    const response = await ergastApi.request(requestConfig);
    return response.data;

  } catch (error) {
    throw error;
  }
};
