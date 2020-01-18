/* Import createSelector function from reselect Library */
import { createSelector } from 'reselect';

/* Shop Input Selector */
const selectShop = (state) => state.shop;

/* Shop Output selector for the items in the shop (sorted by category) */
export const selectShopItems = createSelector([selectShop], (shop) => shop.categories);