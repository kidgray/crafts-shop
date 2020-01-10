import React from 'react';

/* Import preview reel SASS style sheet */
import './preview-reel.styles.scss';

/* 
Functional Component for the Preview Reel of each category.container
Need to pass in props for the title (category name) of each reel, as
well as the array that contains all the items in each category
*/
export const PreviewReel = ({ category, items }) => (
    <div className='preview-reel'>
        {/* Title of the current reel */}
        <h1 className='title'>{ category.toUpperCase() }</h1>

        {/* The reel itself, which contains all the items */}
        <div className='reel'>
            {
                /* Display the first 5 items in each category on the preview reel
                (ONLY THE FIRST FIVE ITEMS. this is why I chain filter() and map())

                IMPORTANT NOTE: This might be performance issue if the array becomes
                too large or if you want to display some large number of items (like in a slideshow)
                This is because every time a PreviewReel component is re-rendered or mounted, this
                whole chain of functions has to run again (this is a particularity of React)
                */
                items.filter((current, index) => (index < 5)).map((current) => (
                    <div key={ current.id }>{ current.name }</div>
                ))
            }
        </div>
    </div>
);