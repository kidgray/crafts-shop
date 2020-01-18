import React from 'react';

/* Import CategoryOverview Component */
import { CategoryOverview } from '../../components/category-overview/category-overview.component';

/* Import Category Page */
import { CategoryPage } from '../category/category.component';

/* Import Route Component */
import { Route } from 'react-router-dom';

/* Shop Data is now stored in the Redux Store, so ShopPage
can now be a Functional Component */
export const ShopPage = ({ match }) => (
    <div className='shop-page'>
        {/* The Shop Overview Page with the preview reels */}
        <Route exact={true} path={`${match.path}`} component={CategoryOverview} />

        {/* This page will dynamically display a category page based on the URL parameter */}
        <Route path={`${match.path}/:categoryID`} component={CategoryPage} />
    </div>
);