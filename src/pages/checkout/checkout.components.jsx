import React from 'react';

/* Import SASS Style Sheet */
import './checkout.styles.scss';

/* Import CheckoutItem Component */
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';

/* Import Stripe Checkout Button Component */
import { StripeCheckoutButton } from '../../components/stripe-button/stripe-button.component';

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

        {/* Render the items in the user's cart */}
        {
            cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
        }

        {/* Total Cost of all items in the Cart */}
        <div className='total'>
            <span>TOTAL: ${ cartTotal }</span>
        </div>

        {/* --- FOR TESTING/DEVELOPMENT PURPOSES ONLY. REMOVE WHEN SITE GOES LIVE! --- */}
        <div className='WARNING'>
            - Please use the following test CC info (provided by Stripe) -
            <br />
            <br />
            CARD TYPE: VISA
            <br />
            NUMBER: 4242 4242 4242 4242
            <br />
            EXP: 01/20
            <br />
            CVV: 123
            <br />
        </div>


        {/* Checkout Button implemented using Stripe */}
        <StripeCheckoutButton cartTotal={cartTotal} />
    </div>
));