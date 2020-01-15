import React from 'react';

/* Logo will link to the Home Page when it's clicked,
so I need this component */
import { Link } from 'react-router-dom';

/* Import Auth library from Firebase Utilities */
import { auth } from '../../firebase/firebase.utils';

/* Import SASS Style Sheet */
import './header.styles.scss';

/*This is React's special syntax for importing SVG logos as Components */
import {ReactComponent as Logo} from '../../img/rose-logo-svg.svg';

/* Import Connect function from react-redux library*/
import { connect } from 'react-redux';

/* mapStateToProps function takes the Root Reducer as an argument
and returns an object whose property names will be the names of the
properties we want to pass in to the component and the value will
be those properties' corresponding values */
const mapStateToProps = (state)=> ({
    // This is basically getting the currentUser value
    // from the userReducer, which is in the Root Reducer,
    // and assigning its value to a property called currentUser,
    // which is the same name as the corresponding property in
    // the Reducer it came from (user reducer, in this case)
    currentUser: state.user.currentUser
})

/* Functional Component for the Header */
export const Header = connect(mapStateToProps)(({ currentUser }) => (
    <div className='header'>
        {/* Logo links to home page */}
        <Link className='logo-link' to='/'>
            {/* Logo is an SVG, which is small and most importantly,
            looks the same no matter how much the image is shrunk or enlarged */}
            <Logo className='logo' />
        </Link>

        {/* Links to other pages */}
        <div className='link-bar'>
            <Link className='bar-item' to='/shop'>
                SHOP
            </Link>
            <Link className='bar-item' to=''>
                CONTACT
            </Link>

            {/* If there's no user logged in, render a Login button
            on the menu bar; if there is a user logged in,
            render a logout button */}
            {
                currentUser ? 
                <div className='bar-item' onClick={() => auth.signOut()}>LOG OUT</div>
                :
                <Link className='bar-item' to='/signin'>
                    LOG IN
                </Link>
            }

            {/* If there's no user logged in, render a Sign Up button
            on the menu bar; if there is a user logged in,
            don't render anything else */}
            {/* {
                currentUser ? 
                null
                :
                <Link className='bar-item' to='register'>
                    SIGN UP
                </Link>
            } */}

        </div>
    </div>
));

// export const ReduxHeader = connect(mapStateToProps)(Header);