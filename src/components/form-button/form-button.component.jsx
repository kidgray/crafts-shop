import React from 'react';

/* Import SASS Style Sheet */
import './form-button.styles.scss';

/* Functional Component for the Form Button */
export const FormButton = ({ children, ...props }) => (
    /* All this Functional Component does is 
    render a Button that's styled according to the SASS
    style sheet */
    <button className='form-button' {...props}>
        {children}
    </button>
);