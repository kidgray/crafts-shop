import React from 'react';

/* Import menu-item SASS styles */
import './menu-item.styles.scss';

/* State and lifecycle methods are not necessary for menu items,
so I'll use a Functional Component for the menu item.

Note that I destructure the props for easier access and so I don't
forget what I'm supposed to be passing in to this component later. */
const MenuItem = ({ title, imageUrl, size }) => (
    /* Use React's built-in style attribute for JSX elements
    to add a background image to each MenuItem element */
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>{ title }</h1>
            <span className="subtitle">BROWSE SELECTION</span>
        </div>
    </div>
);

/* Export MenuItem */
export default MenuItem;