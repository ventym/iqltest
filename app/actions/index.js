export const actionTypes = {
  fetchDrivers: {
    started: 'fetchDrivers/started',
    success: 'fetchDrivers/success',
    failed: 'fetchDrivers/failed',
  },
  setPageIndex: 'setPageIndex',
  fetchResults: {
    started: 'fetchResults/started',
    success: 'fetchResults/success',
    failed: 'fetchResults/failed',
  },
};

export const actions = {
  fetchDrivers: {
    started: (payload) => ({
      type: actionTypes.fetchDrivers.started,
      payload,
    }),

    success: (payload) => ({
      type: actionTypes.fetchDrivers.success,
      payload,
    }),

    failed: (payload) => ({
      type: actionTypes.fetchDrivers.failed,
      payload,
    }),
  },

  setPageIndex: (payload) => ({
    type: actionTypes.setPageIndex,
    payload,
  }),

  fetchResults: {
    started: (payload) => ({
      type: actionTypes.fetchResults.started,
      payload,
    }),

    success: (payload) => ({
      type: actionTypes.fetchResults.success,
      payload,
    }),

    failed: (payload) => ({
      type: actionTypes.fetchResults.failed,
      payload,
    }),
  },
};
