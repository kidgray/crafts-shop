import React from 'react';

/* Import MenuItem component so we can use it to 
render our menu items */
import MenuItem from '../menu-item/menu-item.component';

/* Import directory SASS styles */
import './directory.styles.scss';

/* Import connect() function from react-redux library */
import { connect } from 'react-redux';

/* Import selectDirectoryCategories selector */
import { selectDirectoryCategories } from '../../redux/directory/directory.selectors';

const mapStateToProps = (state) => ({
    categories: selectDirectoryCategories(state)
});

/* The Directory is now stored inside the Redux Store, in the 
Directory Reducer, so Directory is now a regular functional component.*/
export const Directory = connect(mapStateToProps)(({ categories }) => (
    <div className='directory-menu'>
    {
        /* Create a MenuItem for each of the categories in our state.
        Destructure each category object into its properties so that passing
        them to the MenuItem is easier. */
        categories.map(({ id, ...containerProps }) => (
            <MenuItem key={id} {...containerProps} />
        ))
    }
</div>
));