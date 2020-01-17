/* Import Cart Action Types */
import { CartActionTypes } from './cart.types';

/* Import addItemToCart auxiliary function */
import { addItemToCart } from './cart.utils';

/* Import decrementItemInCart auxiliary function */
import { decrementItemInCart } from './cart.utils';

/* Initial State of the Reducer */
const INITIAL_STATE = {
    /* Cart's menu starts out as hidden */
    hidden: true,
    cartItems: []
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
            };
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    /* Return a new cartItems array containing only items whose id doesn't
                    match that of the item that needs to be removed from the cart */
                    (item) => (item.id !== action.payload.id)
                )
            };
        case CartActionTypes.DECREMENT_ITEM:
            return {
                ...state,
                cartItems: decrementItemInCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};