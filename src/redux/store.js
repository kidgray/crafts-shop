/* Import the createStore and applyMiddleware functions from redux library */
import { createStore, applyMiddleware } from 'redux';

/* Import the React Logger utility */
import logger from 'redux-logger';

/* Import Root Reducer */
import { rootReducer } from './root-reducer';

/* Array of Middlewares */
const middlewares = [logger];

/* Create and Export the Redux Store */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

