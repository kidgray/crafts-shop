/* Import createSelector function from reselect Library */
import { createSelector } from 'reselect';

/* Shop Input Selector */
const selectShop = (state) => state.shop;

/* Shop Output selector for the items in the shop (sorted by category) */
export const selectShopItems = createSelector([selectShop], (shop) => shop.categories);

/* Shop Output selector for the item category to display. 

This is a callback function that will take a categoryID and use it
in the call to createSelector() to create the appropriate category selector */
export const selectCategory = (categoryID) => createSelector(
    [selectShopItems], 
    (categories) => categories[categoryID]
);

/* Shop Output selector that converts the Shop Data object into an 
array for use in the preview reel 

Uses Object.keys() to obtain an array containing all the keys in an object,
then maps over that array, which ultimately returns an array containing all
the objects inside the categories object.

*/
export const selectItemsForPreview = createSelector(
    [selectShopItems], 
    (categories) => Object.keys(categories).map(key => categories[key]));