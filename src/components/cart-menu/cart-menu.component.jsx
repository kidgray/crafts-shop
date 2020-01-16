import React from 'react';

/* Import SASS Style Sheet */
import './cart-menu.styles.scss';

/* Import Form Button Component */
import { FormButton } from '../form-button/form-button.component';

/* Functional Component for the Cart */
export const CartMenu = () => (
    // This is the dropdown menu that appears when you click on the Cart
    <div className='cart-menu'>
        {/* This div contains the list of items inside the dropdown menu */}
        <div className='cart-items' />

        {/* Checkout Button */}
        <FormButton>CHECKOUT</FormButton>
    </div>
);