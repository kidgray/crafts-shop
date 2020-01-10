import React from 'react';

/* Import list of merchandise from shop data file */
import { ShopData } from './shop.data';

/* Import PreviewReel Component */
import { PreviewReel } from '../../components/preview-reel/preview-reel.component';

/* I'll need access to the state so I can store
information regarding the merchandise collections
on the shop page itself (so it can be displayed and otherwise
manipulated), so this will be a class component */

export class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        /* Note that categories of items have separate id counters
        from the items themselves */
        this.state = {
            categories: ShopData
        }
    }

    render() {

        // Destructure the state property just so that I don't have
        // to type this.state.categories over and over again
        const {categories} = this.state;

        return (
        <div className='shop-page'>
            {
                categories.map(({ id, ...categoryProps }) => (
                    <PreviewReel key={id} {...categoryProps} />
                ))
            }
        </div>
        );
    }
}