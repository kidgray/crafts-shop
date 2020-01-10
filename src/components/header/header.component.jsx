import React from 'react';

/* Logo will link to the Home Page when it's clicked,
so I need this component */
import { Link } from 'react-router-dom';

/* Import SASS Style Sheet */
import './header.styles.scss';

/*This is React's special syntax for importing SVG logos as Components */
import {ReactComponent as Logo} from '../../img/rose-logo-svg.svg';

/* Functional Component for the Header */
export const Header = () => (
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
        </div>
    </div>
);