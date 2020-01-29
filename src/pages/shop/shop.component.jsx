import React from 'react';

/* Import CategoryOverview Component */
import { CategoryOverview } from '../../components/category-overview/category-overview.component';

/* Import Category Page */
import { CategoryPage } from '../category/category.component';

/* Import Route Component */
import { Route } from 'react-router-dom';

/* Import connect function from react-redux library */
import { connect } from 'react-redux';

/* Import updateCategories Action */
import { updateCategories } from '../../redux/shop/shop.actions';

/* Import Firebase utilities */
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

const mapDispatchToProps = (dispatch) => ({
    updateCategories: collectionsMap => dispatch(updateCategories(collectionsMap))
});

/* Shop Data is now stored in the Redux Store, so ShopPage
can now be a Functional Component */
class ShopPage extends React.Component {
    // For use whenever the Shop Page Component unmounts.
    // The "Snapshot" you're unsubscribing from is the Snapshot
    // of the collections that will be pulled from firestore.
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        // Get the collection reference object
        const collectionRef = firestore.collection('collections');

        // onSnapshot() is a listener that returns the snapshot
        // associated with the reference object it's attached to
        // whenever that object is changed in the firestore database
        collectionRef.onSnapshot(async (snapshot) => {
            // Create the object map of the categories 
            // that will be stored in the shop reducer
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);

            // Pass the collections object map created above to the updateCategories
            // action
            this.props.updateCategories(collectionsMap);
        });
    }

    render() {
        // Destructure the match property from props
        const { match }  = this.props;

        return (
            <div className='shop-page'>
                {/* The Shop Overview Page with the preview reels */}
                <Route exact={true} path={`${match.path}`} component={CategoryOverview} />
        
                {/* This page will dynamically display a category page based on the URL parameter */}
                <Route path={`${match.path}/:categoryID`} component={CategoryPage} />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);