import React from 'react';

/* Import SASS Style Sheet */
import './checkout.styles.scss';

/* Import CheckoutItem Component */
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';

/* Import connect function from react-redux library */
import { connect } from 'react-redux';

/* Import selectCartItems selector */
import { selectCartItems } from '../../redux/cart/cart.selectors';

/* Import selectCartTotal selector */
import { selectCartTotal } from '../../redux/cart/cart.selectors';

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    cartTotal: selectCartTotal(state)
})

/* Functional Component for the Checkout Page */
export const CheckoutPage = connect(mapStateToProps)(({ cartItems, cartTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            {/* Product Column */}
            <div className='header-column'>
                <span>PRODUCT</span>
            </div>

            {/* Description Column */}
            <div className='header-column'>
                <span>DESCRIPTION</span>
            </div>

            {/* Quantity Column */}
            <div className='header-column'>
                <span>QUANTITY</span>
            </div>

            {/* Price Column */}
            <div className='header-column'>
                <span>PRICE</span>
            </div>

            {/* Remove Column */}
            <div className='header-column'>
                <span>REMOVE</span>
            </div>
        </div>


        {
            cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
        }

        {/* Total Cost of all items in the Cart */}
        <div className='total'>
            <span>TOTAL: ${ cartTotal }</span>
        </div>
    </div>
));