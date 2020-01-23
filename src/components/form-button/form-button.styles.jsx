/* Imports from the styled-components library */
import styled, { css } from 'styled-components';

/* CSS for Form Buttons that are Third-Party Sign-In (Google, Facebook, etc)
buttons */
const thirdPartySignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

/* CSS for Form Buttons with Inverted Colors */
const invertedColorStyles = css`
    /* Invert the colors of a regular Form Button */
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

/* This function can be called inside of the FormButtonDiv
CSS code in order to determine whether the Third-Party Sign-in
or Inverted Color styles need to be applied to a specific FormButtonDiv */
const getButtonStyles =  (props) => {
    /* If Form Button is a Third-Party Sign-in button */
    if (props.isThirdPartySignIn) {
        return thirdPartySignInStyles;
    }

    /* If Form Button has Inverted Colors */
    else if (props.invertedColors) {
        return invertedColorStyles;
    }
}

/* The base Form Button Div styles */
export const FormButtonDiv = styled.button`
    min-width: 10.3125rem;
    width: auto;
    height: 3.125rem;
    display: flex;
    justify-content: center;
    letter-spacing: 0.5px;
    line-height: 3.125rem;
    padding: 0 2.1875rem 0 2.1875rem;
    font-size: 0.9375rem;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Abel', sans-serif;
    font-weight: bolder;
    border: none;
    cursor: pointer;

  
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    /* Determine whether the Form Button is a special type
    of Form Button and apply the relevant styles, if any */
    ${getButtonStyles}
`;