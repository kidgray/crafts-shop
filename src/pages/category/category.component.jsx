import React from 'react';

/* Import SASS Style Sheet */
import './category.styles.scss';

/* Import CategoryItem Component */
import { CategoryItem } from '../../components/category-item/category-item.component';

/* Import selectShopItems Selector */
import { selectShopItems } from '../../redux/shop/shop.selectors';

const mapStateToProps = (state) => ({
    categories: selectShopItems(state)
})

/* Functional Component for the CategoryPage */
export const CategoryPage = ({ match, }) => (
    <div className='category-page'>
        <h2>CATEGORY PAGE</h2>
    </div>
);