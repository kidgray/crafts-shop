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
})