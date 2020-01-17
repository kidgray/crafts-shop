/* Import createSelector function from reselect library */
import { createSelector } from 'reselect';

/* User Input Selector */
const selectUser = (state) => state.user;

/* Output Selector for the currentUser */
export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);