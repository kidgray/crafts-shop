/* An auxilary function for adding an item to the Cart. */
export const addItemToCart = (cartItems, itemToAdd) => {
    /* Check if the item you're trying to add is already
    in the cart. */
    const itemIsInCart = cartItems.find(item => (item.id === itemToAdd.id));

    /* If item is already in the Cart */
    if (itemIsInCart) {
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