import React from 'react';

/* Import menu-item SASS styles */
import './menu-item.styles.scss';

/* State and lifecycle methods are not necessary for menu items,
so I'll use a Functional Component for the menu item.

Note that I destructure the props for easier access and so I don't
forget what I'm supposed to be passing in to this component later. */
const MenuItem = ({ title, imageUrl, size }) => (
    /* Use React's built-in style attribute for JSX elements
    to add a background image to each MenuItem element. Also
    use template string to add in the size prop as a class */
    <div className={`${size} menu-item`}>

        {/* Image in the background of the tab */}
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />

        {/* The text inside of the tab */}
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className="subtitle">BROWSE SELECTION</span>
        </div>
    </div>
);

/* Export MenuItem */
export default MenuItem;