/* Import createSelector function from reselect library */
import { createSelector } from 'reselect';

/* Directory Input Selector */
const selectDirectory = (state) => state.directory;

/* Output Selector for the categories of the item Directory */
export const selectDirectoryCategories = createSelector([selectDirectory], (directory) => directory.categories)