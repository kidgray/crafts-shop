import React from 'react';

/* Import SASS Style Sheet */
import './cart-icon.styles.scss';

/* Import Shopping Cart Icon */
import { ReactComponent as EmptyCartIcon } from '../../img/shopping-cart-empty-side-view.svg';

/* Import Connect function from react-redux library */
import { connect } from 'react-redux';

/* Import toggleCartHidden Action */
import { toggleCartHidden } from '../../redux/cart/cart.actions';

/* Import selectCartItemCounter selector */
import { selectCartItemCounter } from '../../redux/cart/cart.selectors';

const mapStateToProps = (state) => ({
    /* Use reduce() to add up the quantity of each item
    in the cart and return it as a single numerical value 

    acc is an accumulator variable.
    
    0 is the initial accumulator value. */
    itemCounter: state.cart.cartItems.reduce((acc, item) => (acc + item.quantity), 0)
})

/* mapDispatchToProps function that will be passed as 2nd argument to connect() */
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

/* Functional Component for the Cart Icon */
export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(({ itemCounter, toggleCartHidden }) => (
    // Clicking the Cart Icon triggers the Redux Cart Action toggleCartHidden
    <div className='cart-icon' onClick={toggleCartHidden}>
        <EmptyCartIcon className='empty-cart-icon' />
        <span className='item-count'>{ itemCounter }</span>
    </div>
));