/* Import Cart Action Types */
import { CartActionTypes } from './cart.types';

/* TOGGLE_CART_HIDDEN Action 

Note that no payload is passed to this Action Function. 
That's because no payload is needed in this case. Payload
is in fact an optional property of an Action object.

Since all this Action does is denote that the value of the hidden
property should be inverted (which is done in the Reducer function's
switch case for this Action), there's no need to pass any payload here
*/

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

/* ADD_TO_CART Action 

payload is the item that will be added to the cart 
*/
export const addToCart = (item) => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: item
});

/* REMOVE_FROM_CART Action 

Payload is the item that will be removed from the cart
*/
export const removeFromCart = (item) => ({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: item
})

/* DECREMENT_ITEM Action

This action decrements the quantity of a Cart Item by 1.
If the item's quantity is 1, it will be removed from the Cart instead.
*/
export const decrementItem = (item) => ({
    type: CartActionTypes.DECREMENT_ITEM,
    payload: item
})