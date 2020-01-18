import React from 'react';

/* Import CategoryOverview Component */
import { CategoryOverview } from '../../components/category-overview/category-overview.component';

/* Shop Data is now stored in the Redux Store, so ShopPage
can now be a Functional Component */
export const ShopPage = () => (
    <div className='shop-page'>
        <CategoryOverview />
    </div>
);