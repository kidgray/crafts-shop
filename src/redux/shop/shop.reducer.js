/* Import Shop Data */
import { ShopData } from './shop.data';

/* Initial State of the Shop Reducer */
const INITIAL_STATE = {
    categories: ShopData
}

/* The Shop Reducer Function */
export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}