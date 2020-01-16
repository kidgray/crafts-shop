import React from 'react';

/* Import SASS Style Sheet */
import './cart-icon.styles.scss';

/* Import Shopping Cart Icon */
import { ReactComponent as EmptyCartIcon } from '../../img/shopping-cart-empty-side-view.svg';

/* Import Connect function from react-redux library */
import { connect } from 'react-redux';

/* Import toggleCartHidden Action */
import { toggleCartHidden } from '../../redux/cart/cart.actions';

/* mapDispatchToProps function that will be passed as 2nd argument to connect() */
const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

/* Functional Component for the Cart Icon */
export const CartIcon = connect(null, mapDispatchToProps)(({ toggleCartHidden }) => (
    // Clicking the Cart Icon triggers the Redux Cart Action toggleCartHidden
    <div className='cart-icon' onClick={toggleCartHidden}>
        <EmptyCartIcon className='empty-cart-icon' />
        <span className='item-count'> 0 </span>
    </div>
));