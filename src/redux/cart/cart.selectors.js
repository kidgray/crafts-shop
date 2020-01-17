/* Import createSelector function from the reselect library */
import { createSelector } from 'reselect';

/* Cart Input Selector */
const selectCart = (state) => state.cart;

/* Output Selector for the Cart Items */
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

/* Output Selector for the Item Counter inside the Cart Icon */
export const selectCartItemCounter = createSelector([selectCartItems], (cartItems) => 
    /* Use reduce() to add up the quantity of each item
    in the cart and return it as a single numerical value 

    acc is an accumulator variable.
    
    0 is the initial accumulator value. */
    cartItems.reduce((acc, item) => (acc + item.quantity), 0)
);

/* Output Selector for the Hidden property of the CartMenu */
export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

/* Output Selector for the Total Price of all Items in the Cart */
export const selectCartTotal = createSelector([selectCartItems], (cartItems) => 
    /* Map over all items in cartItems and add their prices together,
    storing the total in an accumulator. */

    cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
);