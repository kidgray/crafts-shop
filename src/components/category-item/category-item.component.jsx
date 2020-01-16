import React from 'react';

/* Import SASS Style sheet */
import './category-item.styles.scss';

/* Import Form Button Component */
import { FormButton } from '../form-button/form-button.component';

/* Import connect function from react-redux library */
import { connect } from 'react-redux';

/* Import Add to Cart Action */
import { addToCart } from '../../redux/cart/cart.actions';

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addToCart(item))
});

/* No state data or lifecycle methods needed,
so this is a Functional Component */

/* 
Props are the properties of the items in each category
See shop.data.jsx 
*/

export const CategoryItem = connect(null, mapDispatchToProps)(({ item, addToCart }) => (
    /* This div represents the entire item */
    <div className='category-item'>
        {/* The image for this item. Pass each item's imageUrl
        to the url() function inside a template string. */}
        <div className='image' style={{
            backgroundImage: `url(${item.imageUrl})`
        }} />

        {/* The information about each item (name & price), which goes beneath
        the image */}
        <div className='item-info'>
            <span className='item-name'>{ item.name }</span>
            <span className='item-price'>{ item.price }</span>
        </div>

        {/* Add to Cart Button */}
        <FormButton onClick={() => addToCart(item)} invertedColors={true}>ADD TO CART</FormButton>
    </div>
));