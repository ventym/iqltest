import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { drivers } from './state/drivers';
import { results } from './state/results';

const middlewareList = [thunk];

if (__DEV__) {
  middlewareList.push(
    createLogger({
      collapsed: true,
      duration: true,
      diff: true,
    }),
  );
}

const rootReducer = combineReducers({
  drivers,
  results,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
);
