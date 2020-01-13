import React from 'react';

/* Import SASS Style Sheet */
import './sign-up.styles.scss';

/* Import Form Input Component */
import { FormInput } from '../form-input/form-input.component';

/* Import Form Button Component */
import { FormButton } from '../form-button/form-button.component';

/* 
Import Firebase authentication utility
and Firestore document creation method
*/
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';

/* Need access to state since I need to store the user's information */
export class SignUp extends React.Component {
    constructor() {
        super();

        /* Need to store the user's name, email, password, etc */
        this.state = {
            displayName: '',
            email: '',

            /* User must enter password twice whilst signing up
            to ensure their password is entered correctly */
            password: '',
            confirmPassword: ''
        };
    }

    /* Method for handling the form's submission. 
    It must be asynchronous, as there will be an API call to Firebase
    when creating a user account using the information they provide */
    handleSubmit = async (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        /* Destructure the user's information from this.state */
        const { displayName, email, password, confirmPassword } = this.state;

        /* If the password and confirm password fields don't match,
        alert user */
        if (password !== confirmPassword) {
            alert('Password fields do not match! Please try again.');
            return;
        }

        try {
            /* createUserWithEmailAndPassword() returns a userAuth
            object, but it is named 'user', so use that when destructuring
            the return value. */
            const { user } = auth.createUserWithEmailAndPassword(email, password);

            // Create the user profile on the database. This is also an asynchronous
            // call, so use await keyword
            await createUserProfileDoc(user, { displayName });

            // Clear the state
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
        catch (error) {
            console.error(`An error occurred while creating the account: ${error}`);
        }
    };

    /* Function for handling changes to the form input fields */
    handleChange = (event) => {
        /* Destructure name and value from the input fields */
        const { name, value } = event.target;

        /* Same idea as SignIn Component. Refer to that file. */
        this.setState({[name]: value});
    };

    render() {
        /* Destructure the user's information from this.state */
        const { displayName, email, password, confirmPassword } = this.state;

        return(
            <div className='sign-up'>
                <h2 className='title'>SIGN UP</h2>
                <span>Enter an email and password to sign up.</span>

                {/* The actual Sign Up form */}
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    {/* Input for User's name */}
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Your Name' required={true} />

                    {/* Input for user's email */}
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email Address' required={true} />

                    {/* Input for user's password */}
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required={true} />

                    {/* Input for password confirmation */}
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required={true} />

                    {/* Submit Button for the Sign up form */}
                    <FormButton type='submit'>SIGN UP</FormButton>
                </form>
            </div>
        );
    }
}