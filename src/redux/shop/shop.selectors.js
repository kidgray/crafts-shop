/* Import createSelector function from reselect Library */
import { createSelector } from 'reselect';

/* Maps category IDs to their Routes */
const CATEGORY_ID_MAP = {
    dolls: 1,
    handbags: 2,
    scrunchies: 3,
    bracelets: 4,
    bath: 5
}

/* Shop Input Selector */
const selectShop = (state) => state.shop;

/* Shop Output selector for the items in the shop (sorted by category) */
export const selectShopItems = createSelector([selectShop], (shop) => shop.categories);

/* Shop Output selector for the item category to display. 

This is a callback function that will take a categoryID and use it
in the call to createSelector() to create the appropriate category selector */
export const selectCategory = (categoryID) => createSelector([selectShopItems], (categories) => { 
    /* Searches the array of categories inside the shop Reducer for a category whose route
    matches the categoryID that was passed in from the Route Component for the Category Page 
    (the nested Route that's in the Shop Page) */
    categories.find(category => category.id === CATEGORY_ID_MAP[categoryID]) 
});