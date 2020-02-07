/* Import Shop Action Types */
import { ShopActionTypes } from './shop.types';

/* Initial State of the Shop Reducer */
const INITIAL_STATE = {
    categories: null
}

/* The Shop Reducer Function */
export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
}