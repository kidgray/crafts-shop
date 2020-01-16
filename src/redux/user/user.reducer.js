/* Import User Action Types */
import { UserActionTypes } from './user.types';

/* The initial State of the Reducer */
const INITIAL_STATE = {
    currentUser: null
}

/* The User Reducer function */
export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}