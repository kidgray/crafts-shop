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
                    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrLIQVWtuRcQ%2Fmaxresdefault.jpg&f=1&nofb=1',
                    id: 1
                },
                {
                    title: 'handbags',
                    imageUrl: 'https://i.ebayimg.com/images/i/291930243981-0-1/s-l1000.jpg',
                    id: 2
                },
                {
                    title: 'scrunchies & headbands',
                    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.wp.com%2Fsewing.craftgossip.com%2Ffiles%2F2015%2F12%2Fhairscrunchie.jpg%3Fresize%3D600%252C450&f=1&nofb=1',
                    id: 3
                },
                {
                    title: 'bracelets',
                    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1xKM2PFXXXXayXXXXq6xXFXXXf%2FMens-Bracelets-2017-6MM-Natural-Stones-Beaded-Bracelet-Punk-Inspirational-Shamballa-Bracelet-Handmade-Mens-Jewelry.jpg&f=1&nofb=1',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'bath & toiletry',
                    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F054%2F0%2F10296789%2Fil_570xN.710168243_6t9v.jpg&f=1&nofb=1',
                    size: 'large',
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
                    this.state.categories.map(({ title, imageUrl, size, id }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        );
    }
}