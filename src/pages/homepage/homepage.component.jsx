import React from 'react';

/* Import SASS style sheet */
import './homepage.styles.scss';

/* Import Directory component */
import Directory from '../../components/directory/directory.component';

/* Don't need state data or lifecycle methods in the
homepage, so just make it a Functional Component */

export const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);