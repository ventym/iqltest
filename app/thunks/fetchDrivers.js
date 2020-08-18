import { actions } from '../actions';
import { api } from '../api';
import { DRIVERS_PER_PAGE } from '../api/fetchDrivers';

export const fetchDrivers = () => async (dispatch, getState) => {
  const pageIndex = getState().drivers.pageIndex;
  dispatch(actions.fetchDrivers.started({ pageIndex }));

  try {
    const responseData = await api.fetchDrivers({ pageIndex });

    if (!responseData?.MRData?.DriverTable?.Drivers || !responseData?.MRData?.total) {
      throw new Error('Bad response');
    }

    const drivers = responseData.MRData.DriverTable.Drivers;
    const pageCount = Math.ceil(responseData.MRData.total / DRIVERS_PER_PAGE);

    dispatch(actions.fetchDrivers.success({
      drivers,
      pageIndex,
      pageCount,
    }));

  } catch (error) {
    dispatch(actions.fetchDrivers.failed({
      pageIndex,
      error,
    }));
  }
};
