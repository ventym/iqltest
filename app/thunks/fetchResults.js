import { actions } from '../actions';
import { api } from '../api';

export const fetchResults = ({ driverId }) => async (dispatch) => {
  dispatch(actions.fetchResults.started({ driverId }));

  try {
    const responseData = await api.fetchResults({ driverId });

    if (!responseData?.MRData?.RaceTable?.Races) {
      throw new Error('Bad response');
    }

    const races = responseData.MRData.RaceTable.Races;
    dispatch(actions.fetchResults.success({ races }));

  } catch (error) {
    dispatch(actions.fetchResults.failed({ error }));
  }
};
