/* Import Cart Action Types */
import { CartActionTypes } from './cart.types';

/* Initial State of the Reducer */
const INITIAL_STATE = {
    /* Cart's menu starts out as hidden */
    hidden: true
}

/* The Cart Reducer Function */
export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                /* Toggle the menu between being
                hidden and shown */
                hidden: !state.hidden
            }
        default:
            return state;
    }
};