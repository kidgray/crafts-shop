/* Import User Action Types */
import { UserActionTypes } from './user.types';

/* 
SET_CURRENT_USER Action

The user parameter is a userAuth object, userSnapshot object
(from firebase.utils), or null
*/
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})