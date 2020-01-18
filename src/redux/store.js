/* Import the createStore and applyMiddleware functions from redux library */
import { createStore, applyMiddleware } from 'redux';

/* Import persistStore function from redux-persist library */
import { persistStore } from 'redux-persist';

/* Import the React Logger utility */
import logger from 'redux-logger';

/* Import Root Reducer */
import { rootReducer } from './root-reducer';

/* Array of Middlewares */
const middlewares = [logger];

/* Create and Export the Redux Store */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

/* Create and export persisted version of the Store made using redux-persist */
export const persistor = persistStore(store);