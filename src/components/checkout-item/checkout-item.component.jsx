import React from 'react';

/* Import connect function from react-router-dom library */
import { connect } from 'react-redux';

/* Import SASS Style Sheet */
import './checkout-item.styles.scss';

/* Import removeFromCart, addToCart, and decrementItem Actions */
import { removeFromCart, addToCart, decrementItem } from '../../redux/cart/cart.actions';

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (item) => dispatch(removeFromCart(item)),
    addToCart: (item) => dispatch(addToCart(item)),
    decrementItem: (item) => dispatch(decrementItem(item))
})

/* Functional Component for the CheckoutItem */
export const CheckoutItem = connect(null, mapDispatchToProps)(({ item, removeFromCart, addToCart, decrementItem }) => (
    <div className='checkout-item'>

        {/* For the Product Column */}
        <div className='item-image-container'>
            <img src={item.imageUrl} alt='item'/>
        </div>

        {/* Contents of the Description Column */}
        <span className='item-name'>{ item.name }</span>

        {/* Contents of the Quantity Column */}
        <span className='item-quantity'>
            {/* This is the "decrease quantity" arrow! */}
            <div className='quantity-modifier' onClick={() => decrementItem(item)}>&#10094;</div>

            <span className='amount'>{ item.quantity }</span>

            {/* This is the "increase quantity" arrow! */}
            <div className='quantity-modifier' onClick={() => addToCart(item)}>&#10095;</div>
        </span>

        {/* Contents of the Price Column */}
        <span className='item-price'>${ item.price }</span>

        {/* Contents of the Remove Column */}
        <div className='remove-button' onClick={() => removeFromCart(item)}>
            {/* This is a UTF-8 wingding that looks
            like a heavy "X". Look it up. */}
            &#10006;
        </div>
    </div>
));