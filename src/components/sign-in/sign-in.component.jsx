import React from 'react';

/* Import SASS Style Sheet */
import './sign-in.styles.scss';

/* Import FormInput Component for the Sign-in form */
import { FormInput } from '../form-input/form-input.component';

/* Import FormButton Component for the Submit button */
import { FormButton } from '../form-button/form-button.component';

/* Import Firebase authentication utilities */
import { auth, signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils';

/* The Login page has to store state data (what the user types in),
so this needs to be a Class component */

export class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    // Method for handling the user clicking the Submit button
    // on the sign in form. Since there will be an API call 
    // (to Firebase), it is now an ASYNCHRONOUS function
    handleSubmit = async (event) => {

        // Prevent the default form submission behavior from occurring
        event.preventDefault();

        /* Destructure email and password from state */
        const { email, password } = this.state;

        /* Try/catch block for asynchronous API call to Firebase */
        try {
            // signInWithEmailAndPassword() is the API call; this is
            // asynchronous, so await it
            await auth.signInWithEmailAndPassword(email, password);

            // Clear E-mail and Password fields
            this.setState({email: '', password: ''});
        }
        catch (error) {
            console.error(`An error occurred while signing in: ${error}`)
        }
    };


    handleChange = (event) => {
        // Destructure the value and name off an
        // input field (which is the target of the event, in this case)
        const { name, value } = event.target;

        // Dynamically set the state's email and password fields based
        // on whatever the user entered in their corresponding input fields

        // Note that the value of the name attributes of the input fields have to be the
        // same as the names of the state properties declared inside this.state in the
        // constructor. Otherwise this won't work
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                {/* The text above the sign-in form */}
                <h1 className='login-header'>LOG IN</h1>
                <span className='login-msg'>Log in with your email and password.</span>

                {/* The actual sign-in form itself */}
                <form onSubmit={this.handleSubmit}>
                    {/* E-mail input. Don't forget type='email' so that user actually has to enter an e-mail address */}
                    <FormInput name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange} required={true} />

                    {/* Password input. type='password' shows user's input as asterisks (obscures their input) */}
                    <FormInput name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange} required={true} />


                    {/* Put all the Sign-in buttons inside of this div. This applies the styling that keeps
                    them neat and orderly.  */}
                    <div className='sign-in-buttons'>
                        {/* Submit button for Website Login*/}
                        <FormButton type='submit'>
                            Login
                        </FormButton>

                        {/* Submit button for Google Authentication Login*/}
                        <FormButton onClick={signInWithGoogle} isThirdPartySignIn={true}>
                            Login with Google
                        </FormButton>

                        {/* Submit button for Facebook Authentication Login*/}
                        {/* <FormButton onClick={signInWithFacebook} isThirdPartySignIn={true}>
                            Login with Facebook
                        </FormButton> */}
                    </div>
                </form>
            </div>
        );
    }
}
