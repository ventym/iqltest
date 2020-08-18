import { actionTypes } from '../actions';

const initialState = {
  pages: {},
  pageIndex: 0,
  pageCount: 0,
};

export const drivers = (state = initialState, action) => {
  if (action.type === actionTypes.fetchDrivers.started) {
    return {
      ...state,
      pages: {
        ...state.pages,
        [action.payload.pageIndex]: {
          isLoading: true,
          isLoaded: false,
          error: undefined,
          drivers: [],
        },
      },
    };
  }

  if (action.type === actionTypes.fetchDrivers.success) {
    return {
      ...state,
      pages: {
        ...state.pages,
        [action.payload.pageIndex]: {
          isLoading: false,
          isLoaded: true,
          error: undefined,
          drivers: action.payload.drivers,
        },
      },
      pageCount: action.payload.pageCount,
    };
  }

  if (action.type === actionTypes.fetchDrivers.failed) {
    return {
      ...state,
      pages: {
        ...state.pages,
        [action.payload.pageIndex]: {
          isLoading: false,
          isLoaded: false,
          error: action.payload.error.message,
          drivers: [],
        },
      },
    };
  }

  if (action.type === actionTypes.setPageIndex) {
    return {
      ...state,
      pageIndex: action.payload,
    };
  }

  return state;
};
