import React from 'react';

/* Import SASS Style sheet */
import './category-item.styles.scss';

/* No state data or lifecycle methods needed,
so this is a Functional Component */

/* 
Props are the properties of the items in each category
See shop.data.jsx 
*/

export const CategoryItem = ({ id, name, imageUrl, price }) => (
    /* This div represents the entire item */
    <div className='category-item'>
        {/* The image for this item. Pass each item's imageUrl
        to the url() function inside a template string. */}
        <div className='image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />

        {/* The information about each item (name & price), which goes beneath
        the image */}
        <div className='item-info'>
            <span className='item-name'>{ name }</span>
            <span className='item-price'>{ price }</span>
        </div>
    </div>
);