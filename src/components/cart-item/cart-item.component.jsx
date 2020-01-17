import React from 'react';

/* Import SASS Style Sheet */
import './cart-item.styles.scss';

/* Functional Component for Cart Items */
export const CartItem = ({ item }) => (
    <div className='cart-item'>
    
        {/* The item image */}
        <img src={item.imageUrl} alt='item'/>

        {/* Item's name, quantity, price, etc */}
        <div className='item-info'>
            <span className='item-name'>{item.name}</span>
            <span className='item-price'>{item.quantity} @ ${item.price} ea.</span>
        </div>
    </div>
);