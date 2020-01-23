import React from 'react';

/* Import SASS Style Sheet */
import './form-button.styles.scss';

/* Import styled FormButtonDiv Component */
import { FormButtonDiv } from './form-button.styles';

/* Functional Component for the Form Button */
export const FormButton = ({ children, ...props }) => (
    /* All this Functional Component does is 
    render a Button that's styled according to the SASS
    style sheet. 
    If the button is a Third-Party Sign-In button (Google, Facebook, etc)
    also appends a class with custom styling for those buttons. 
    
    It now implements styled-components functionality. See form-button.styles.jsx */
    <FormButtonDiv {...props}>
        {children}
    </FormButtonDiv>
);