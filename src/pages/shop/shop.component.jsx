import React from 'react';

/* Import connect function from react-redux library */
import { connect } from 'react-redux';

/* Import PreviewReel Component */
import { PreviewReel } from '../../components/preview-reel/preview-reel.component';

/* Import selectShopData selector */
import { selectShopItems } from '../../redux/shop/shop.selectors';

const mapStateToProps = (state) => ({
    categories: selectShopItems(state)
})

/* Shop Data is now stored in the Redux Store, so ShopPage
can now be a Functional Component */
export const ShopPage = connect(mapStateToProps)(({ categories }) => (
    <div className='shop-page'>
    {
        categories.map(({ id, ...categoryProps }) => (
            <PreviewReel key={id} {...categoryProps} />
        ))
    }
    </div>
));