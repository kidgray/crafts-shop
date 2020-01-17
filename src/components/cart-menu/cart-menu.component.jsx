import React from 'react';

/* Import SASS Style Sheet */
import './cart-menu.styles.scss';

/* Import Cart Item Component */
import { CartItem } from '../cart-item/cart-item.component';

/* Import Form Button Component */
import { FormButton } from '../form-button/form-button.component';

/* Import toggleCartHidden Action */
import { toggleCartHidden } from '../../redux/cart/cart.actions';

/* Import connect from react-redux library */
import { connect } from 'react-redux';

/* Import withRouter Higher Order Component from react-router-dom library */
import { withRouter } from 'react-router-dom';

/* Import Cart Items Selector */
import { selectCartItems } from '../../redux/cart/cart.selectors';

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

/* Functional Component for the Cart */
export const CartMenu = withRouter(connect(mapStateToProps)(({ cartItems, history, dispatch}) => (
    // This is the dropdown menu that appears when you click on the Cart
    <div className='cart-menu'>
        {/* This div contains the list of items inside the dropdown menu.
        It conditionally render either the list of cart items or a suitable
        message for an empty cart depending on whether cartItems is empty */}
        <div className='cart-items'>
            {
                (cartItems.length === 0) ? <span className='empty-cart-msg'>Your Shopping Cart is empty</span>
                :
                /* Map each item in cartItems to a CartItem Component and render it 
                inside the cart-items div */
                cartItems.map(item => (<CartItem key={item.id} item={item} />))
            }
        </div>

        {/* Checkout Button */}
        <FormButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>CHECKOUT</FormButton>
    </div>
)));