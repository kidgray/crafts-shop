import React from 'react';

/* Import SASS Style Sheet */
import './registration.styles.scss';

/* Import SignUp Component */
import { SignUp } from '../../components/sign-up/sign-up.component';

/* Functional Component for the Registration Page */
export const Registration = () => (
    <div className='registration'>
        <SignUp />
    </div>
);