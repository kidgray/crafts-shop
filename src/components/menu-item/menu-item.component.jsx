import React from 'react';

/* Import withRouter. This is a higher-order component, i.e. a function
that takes a component as an argument and returns a modified component. */
import { withRouter } from 'react-router-dom';

/* Import menu-item SASS styles */
import './menu-item.styles.scss';

/* State and lifecycle methods are not necessary for menu items,
so I'll use a Functional Component for the menu item.

Note that I destructure the props for easier access and so I don't
forget what I'm supposed to be passing in to this component later. */
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    /* Use React's built-in style attribute for JSX elements
    to add a background image to each MenuItem element. Also
    use template string to add in the size prop as a class */
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

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

/* Export MenuItem, making sure to pass MenuItem to withRouter()
so that it has access to Router props (location, match, and history) */
export default withRouter(MenuItem);