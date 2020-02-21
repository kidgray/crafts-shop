import React from 'react';

/* Import styled FormButtonDiv Component */
//import { FormButtonDiv } from './form-button.styles';

import './form-button.styles.scss';

/* Functional Component for the Form Button */
export const FormButton = ({ children, invertedColors, isThirdPartySignIn, ...props }) => (
    /* All this Functional Component does is 
    render a Button that's styled according to the SASS
    style sheet. 
    If the button is a Third-Party Sign-In button (Google, Facebook, etc)
    also appends a class with custom styling for those buttons. 
    */

    <button className={`${invertedColors ? 'inverted-colors' : ''} 
    ${isThirdPartySignIn ? 'third-party-sign-in' : ''} form-button`} {...props}>
        {children}
    </button>
);