import React from 'react';

/* Import SASS Style Sheet */
import './sign-in-and-sign-up.styles.scss';

/* Import SignIn Component */
import { SignIn } from '../../components/sign-in/sign-in.component';

/* Import SignUp Component */
import { SignUp } from '../../components/sign-up/sign-up.component';

/* Functional Component for the Sign In and
Sign Up page */
export const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        {/* The Login Form */}
        <SignIn />

        {/* The Sign Up Form */}
        <SignUp />
    </div>
);