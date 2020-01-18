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
    category: selectCategory(ownProps.match.params.categoryID)(state)
});

/* Functional Component for the CategoryPage */
export const CategoryPage = connect(mapStateToProps)(({ category }) => {
    return (
        <div className='category-page'>
            {/* Header displays name of the Category */}
            <h1 className='title'>{ category.category }</h1>

            {/* The actual shop items that belong to this category */}
            <div className='items'>
                {
                    category.items.map(item => <CategoryItem key={item.id} item={item} />)
                }
            </div>


        </div>
    );
});