/* Import createSelector function from the reselect library */
import { createSelector } from 'reselect';

/* Cart Input Selector */
const selectCart = (state) => state.cart;

/* Output Selector for the Cart Items */
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

/* Output Selector for the Item Counter inside the Cart Icon */
export const selectCartItemCounter = createSelector([selectCartItems], (cartItems) => {
    /* Use reduce() to add up the quantity of each item
    in the cart and return it as a single numerical value 

    acc is an accumulator variable.
    
    0 is the initial accumulator value. */
    cartItems.reduce((acc, item) => (acc + item.quantity), 0);
});