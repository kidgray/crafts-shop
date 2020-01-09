import React from 'react';

/* Import MenuItem component so we can use it to 
render our menu items */
import MenuItem from '../menu-item/menu-item.component';

/* Import directory SASS styles */
import './directory.styles.scss';

/* Here I use a Class Component for the Directory, because 
I'll need access to the state of the MenuItems I want to pass
in and create the actual shop categories with. */
export default class Directory extends React.Component {
    constructor()
    {
        // Call to the constructor() method of the
        // parent (Component) class gives us access
        // to state and lifecycle methods
        super();

        /* Each MenuItem is a category of merchandise */
        this.state = {
            categories: [
                /* Each category has a name (title),
                an associated image (for the tab on the menu),
                and a unique ID */
                {
                    title: 'dolls',
                    imageUrl: '',
                    id: 1
                },
                {
                    title: 'handbags',
                    imageUrl: '',
                    id: 2
                },
                {
                    title: 'scrunchies & headbands',
                    imageUrl: '',
                    id: 3
                },
                {
                    title: 'bracelets',
                    imageUrl: '',
                    id: 4
                },
                {
                    title: 'bath & toiletry',
                    imageUrl: '',
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    /* Create a MenuItem for each of the categories in our state.
                    Destructure each category object into its properties so that passing
                    them to the MenuItem is easier. */
                    this.state.categories.map(({ title, imageUrl, id }) => (
                        <MenuItem key={id} title={title} />
                    ))
                }
            </div>
        );
    }
}