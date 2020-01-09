import React from 'react';

/* Import menu-item SASS styles */
import './menu-item.styles.scss';

/* State and lifecycle methods are not necessary for menu items,
so I'll use a Functional Component for the menu item.

Note that I destructure the props for easier access and so I don't
forget what I'm supposed to be passing in to this component later. */
const MenuItem = ({ title }) => (
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>{ title }</h1>
            <span className="subtitle">BROWSE SELECTION</span>
        </div>
    </div>
);

/* Export MenuItem */
export default MenuItem;