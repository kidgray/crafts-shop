/* Import the function for combining reducers from react-redux */
import { combineReducers } from 'redux';

/* Import User Reducer */
import { userReducer } from './user/user.reducer';

/* Create and Export the Root Reducer */
export const rootReducer = combineReducers({
    user: userReducer
})