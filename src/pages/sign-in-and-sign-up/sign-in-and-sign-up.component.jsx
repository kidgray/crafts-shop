import React from 'react';

/* Import SASS Style Sheet */
import './sign-in-and-sign-up.styles.scss';

/* Import SignIn Component */
import { SignIn } from '../../components/sign-in/sign-in.component';

/* Functional Component for the Sign In and
Sign Up page */
export const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
    </div>
);