/* Import Shop Action Types */
import { ShopActionTypes } from './shop.types';

/* UPDATE_CATEGORIES Action */
export const updateCategories = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_CATEGORIES,
    payload: collectionsMap
});