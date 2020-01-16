import React from 'react';

/* Import SASS Style Sheet */
import './cart-menu.styles.scss';

/* Import Cart Item Component */
import { CartItem } from '../cart-item/cart-item.component';

/* Import Form Button Component */
import { FormButton } from '../form-button/form-button.component';

/* Import connect from react-redux library */
import { connect } from 'react-redux';

/* Import Cart Items Selector */
import { selectCartItems } from '../../redux/cart/cart.selectors';

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

/* Functional Component for the Cart */
export const CartMenu = connect(mapStateToProps)(({ cartItems }) => (
    // This is the dropdown menu that appears when you click on the Cart
    <div className='cart-menu'>
        {/* This div contains the list of items inside the dropdown menu */}
        <div className='cart-items'>
            {
                /* Map each item in cartItems to a CartItem Component and render it 
                inside the cart-items div */
                cartItems.map(item => (<CartItem key={item.id} item={item} />))
            }
        </div>

        {/* Checkout Button */}
        <FormButton>CHECKOUT</FormButton>
    </div>
));