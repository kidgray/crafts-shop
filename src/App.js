import React from 'react';
import './App.css';

/* Import Route, Switch and Redirect Components from react-router-dom library */
import { Switch, Route, Redirect } from 'react-router-dom';

/* Import HomePage */
import { HomePage } from './pages/homepage/homepage.component';

/* Import ShopPage */
import { ShopPage } from './pages/shop/shop.component';

/* Import Sign In/Sign Up Page */
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

/* Import Checkout Page */
import { CheckoutPage } from './pages/checkout/checkout.components';

/* Import Header */
import { Header } from './components/header/header.component';

/* Import Firebase utilities */
import { auth, createUserProfileDoc } from './firebase/firebase.utils';

/* Import connect from react-redux library. This is so that the App can
update Reducer values by firing Actions */
import { connect } from 'react-redux';

/* Import selectCurrentUser selector */
import { selectCurrentUser } from './redux/user/user.selectors';

/* Import SET_CURRENT_USER Action */
import { setCurrentUser } from './redux/user/user.actions';

/* App is now a Class Component, since I need to store the user info
provided to Google/Facebook Authentication Utilities in the App's state
so that it can later be passed to components that need it */
class App extends React.Component {
  // Will be used to close the Open Subscription when the web app
  // is unmounted. Closing the subscription will avoid memory leaks
  unsubscribeFromAuth = null;

  /* 
  Use the onAuthStateChanged() method of the auth library.
  This method takes a function whose argument is the user of a
  given Firebase authenticator. 
  */
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 
      // If userAuth contains data
      if (userAuth) {
        // Get documentReference object
        const userRef = await createUserProfileDoc(userAuth);

        // Get the snapshot object corresponding to the docReference
        // above. Note that this is similar to calling onAuthStateChanged(). See firebase docs
        userRef.onSnapshot(userSnapshot => {
          // Save user's information in the Redux store so it can
          // be used. Updated for Redux: use setCurrentUser() action
          // to do this instead.
          this.props.setCurrentUser({
            // ID of the current user
            id: userSnapshot.id,

            // Spread in the other properties of the user document
            ...userSnapshot.data()
          });
        });
      }

      // If userAuth is null
      else {
        // Updated for Redux implementation: call the setCurrentUser() Action Function
        // and pass is userAuth
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  /* Whenever the App Component unmounts, close the Authentication Open Subscription */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
  
        {/* By placing the Header Component outside of the Switch/Route
        Component tree, the site's Header will always be rendered no matter
        which specific page is rendered by React. */}
        <Header />
  
        {/* Switch component from react-router-dom package ensures
        that as soon as a route inside of it finds a matching path,
        we do not render anything but that route. */}
        <Switch>
          {/* // Use react-router-dom's Route Component
          // to display pages */}
  
          {/* Home Page */}
          <Route exact={true} path='/' component={HomePage} />
  
          {/* Shop Page */}
          <Route path='/shop' component={ShopPage} />
  
          {/* Sign In/Sign Up Page.
              If a User is Signed In, redirect to Home Page.
              Otherwise, Render the Sign In/Sign Up Page.
          */}
          <Route exact={true} path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />

          {/* Checkout Page */}
          <Route exact={true} path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

/* App Component will need access to currentUser prop so it can conditionally render
the Sign In page, so I need to pass mapStateToProps to connect() */
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

/* mapDispatchToProps is the second argument to connect() */
const mapDispatchToProps = (dispatch) => ({

  /* NOTE TO SELF: The dispatch() function takes an Action object
  that will be dispatched to every Reducer. 

  setCurrentUser() is an Action Constructor Function that takes a user
  and returns an Action object that sets the user you passed in as
  the current user. */
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

/* connect() has two arguments:

  mapStateToProps
  mapDispatchToProps

It's possible to pass in null for mapStateToProps if the Component doesn't
need the State props anymore at the time of calling connect() */

export default connect(mapStateToProps, mapDispatchToProps)(App);
