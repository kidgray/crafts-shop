/* An auxilary function for adding an item to the Cart. */
export const addItemToCart = (cartItems, itemToAdd) => {
    /* Check if the item you're trying to add is already
    in the cart. */
    const itemInCart = cartItems.find(item => (item.id === itemToAdd.id));

    /* If item is already in the Cart */
    if (itemInCart) {
        /* map() will return a new array containing all the cart items. 
        If the current item is the item you want to add (i.e. their unique IDs match),
        return a new item object containing all of the old
        properties of the item, but with its quantity property incremented by 1.
        Otherwise, just return the item unchanged.
        */
        return cartItems.map(item => (item.id === itemToAdd.id) ? { ...item, quantity: item.quantity + 1 } : item);
    }

    /* If the item is not already in the Cart */
    else
    {
        /* Return a new cartItems array that contains all the items that were already
        in the array, PLUS the new item, destructured to contain all its default properties, except
        its quantity property will be updated to be 1. */
        return [...cartItems, { ...itemToAdd, quantity: 1 }];
    }
}

/* An auxiliary function for decrementing the quantity of an item in the Cart. */
export const decrementItemInCart = (cartItems, itemToDecrement) => {
    /* Check if the item you're trying to remove is already
    in the cart. */
    const itemInCart = cartItems.find(item => (item.id === itemToDecrement.id));

    /* If the quantity of the item to decrement is 1, remove it from the cart */
    if (itemInCart.quantity === 1) {
        /* Return a new cartItems array with itemToDecrement filtered out */
        return cartItems.filter((item) => (item.id !== itemToDecrement.id));
    }

    /* If the quantity is greater than 1 */
    else {
        /* Similar idea to addItemToCart(). Map over the array of cartItems, returning the item unchanged
        if it isn't the item that needs to be decremented, and if it is that item, then return a new item
        that has all the old properties of the decremented item, except its quantity property is decremented by 1 */
        return cartItems.map(item => (item.id === itemToDecrement.id) ? { ...item, quantity: item.quantity - 1 } : item);
    }
}