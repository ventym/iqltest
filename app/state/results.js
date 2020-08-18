import { actionTypes } from '../actions';

const initialState = {
  driverId: undefined,
  races: [],
  isLoading: false,
  isLoaded: false,
  error: undefined,
};

export const results = (state = initialState, action) => {
  if (action.type === actionTypes.fetchResults.started) {
    return {
      ...state,
      isLoading: true,
      driverId: action.payload.driverId,
    };
  }

  if (action.type === actionTypes.fetchResults.success) {
    return {
      ...state,
      isLoading: false,
      isLoaded: true,
      races: action.payload.races,
    };
  }

  if (action.type === actionTypes.fetchResults.failed) {
    return {
      ...state,
      isLoading: false,
      isLoaded: false,
      error: action.payload.error.message,
    };
  }

  return state;
};
