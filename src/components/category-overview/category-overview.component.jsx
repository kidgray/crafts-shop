import React from 'react';

/* Import SASS Style Sheet */
import './category-overview.styles.scss';

/* Import connect function from react-redux library */
import { connect } from 'react-redux';

/* Import PreviewReel Component */
import { PreviewReel } from '../preview-reel/preview-reel.component';

/* Import selectShopItems selector */
import { selectShopItems } from '../../redux/shop/shop.selectors';

const mapStateToProps = (state) => ({
    categories: selectShopItems(state)
})

/* Functional Component for the CategoryOverview */
export const CategoryOverview = connect(mapStateToProps)(({ categories }) => (
    <div className='category-overview'>
    {
        categories.map(({ id, ...categoryProps }) => (
            <PreviewReel key={id} {...categoryProps} />
        ))
    }
    </div>
));