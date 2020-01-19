import React from 'react';

/* Import Stripe Checkout Component from react-stripe-checkout library */
import StripeCheckout from 'react-stripe-checkout';

/* Functional Component for the Stripe Checkout Button */
export const StripeCheckoutButton = ({ cartTotal }) => {
    /* The Publishable Key needed to access Stripe components */
    const publishableKey = 	'pk_test_CxSmFwzdWI2fg4siFpKklpcS00pPoWF7b2';

    /* Stripe handles checkouts in Cents, so a customer's total
    has to be converted from its dollar value to cents */
    const totalInCents = cartTotal * 100;

    /* --- CHANGE ME WHEN STORE IS LIVE ---

        This function would ordinarily pass the token (which is returned on successful payment method confirmation)
        to the back end (database), which would create the charge and finalize the transaction.
    */
    const onToken = (token) => {
        console.log(token);
        alert('Payment successful!')
    }

    return (
        /* Refer to react-stripe-checkout library's github page to see
        the full list of attributes that the StripeCheckout Component
        can accept. It's possible to add Bitcoin and Alipay as payment methods! */
        <StripeCheckout 
            label='Confirm Payment'
            name='The Craftshop Ltd.'
            billingAddress={true}
            shippingAddress={true}
            image='https://image.flaticon.com/icons/svg/2392/2392150.svg'
            description={`YOUR TOTAL IS: $${cartTotal}`}
            amount={totalInCents}
            panelLabel='Confirm Payment'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};