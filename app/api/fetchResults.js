import { ergastApi } from './ergastApi';

export const fetchResults = async ({ driverId }) => {
  try {
    const requestConfig = {
      method: 'get',
      url: `/drivers/${driverId}/results.json`,
    };

    const response = await ergastApi.request(requestConfig);
    return response.data;

  } catch (error) {
    throw error;
  }
};
