import React from 'react';

/* Import SASS Style Sheet */
import './category.styles.scss';

/* Import connect function from react-redux library */
import { connect } from 'react-redux';

/* Import CategoryItem Component */
import { CategoryItem } from '../../components/category-item/category-item.component';

/* Import selectCategory selector */
import { selectCategory } from '../../redux/shop/shop.selectors';

const mapStateToProps = (state, ownProps) => ({
    /* Note that the selectCategory selector was defined as a curried function
    that takes a categoryID from a Route path URL and returns the
    createSelector() function, which actually selects the proper category object */
    collection: selectCategory(ownProps.match.params.categoryID)(state)
})

/* Functional Component for the CategoryPage */
export const CategoryPage = connect(mapStateToProps)(({ match, category }) => (
    <div className='category-page'>
        <h2>CATEGORY PAGE</h2>
    </div>
));