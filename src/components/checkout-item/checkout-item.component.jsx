import React from 'react';

/* Import SASS Style Sheet */
import './checkout-item.styles.scss';

/* Functional Component for the CheckoutItem */
export const CheckoutItem = ({ item }) => (
    <div className='checkout-item'>

        {/* For the Product Column */}
        <div className='item-image-container'>
            <img src={item.imageUrl} alt='item'/>
        </div>

        {/* Contents of the Description Column */}
        <span className='item-name'>{ item.name }</span>

        {/* Contents of the Quantity Column */}
        <span className='item-quantity'>{ item.quantity }</span>

        {/* Contents of the Price Column */}
        <span className='item-price'>${ item.price }</span>

        {/* Contents of the Remove Column */}
        <div className='remove-button'>
            {/* This is a UTF-8 wingding that looks
            like a heavy "X". Look it up. */}
            &#10006;
        </div>
    </div>
);