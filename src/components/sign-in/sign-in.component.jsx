import React from 'react';

/* Import SASS Style Sheet */
import './sign-in.styles.scss';

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
    // on the sign in form
    handleSubmit = (event) => {

        // Prevent the default form submission behavior from occurring
        event.preventDefault();

        // Clear E-mail and Password fields
        this.setState({email: '', password: ''});
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
                <h1>LOG IN</h1>
                <span>Log in with your email and password.</span>

                {/* The actual sign-in form itself */}
                <form onSubmit={ this.handleSubmit }>
                    {/* E-mail input. Don't forget type='email' so that user actually has to enter an e-mail address */}
                    <input name='email' type='email' value={this.state.email} onChange={this.handleChange} required={true} />
                    <label>E-mail</label>

                    {/* Password input. type='password' shows user's input as asterisks (obscures their input) */}
                    <input name='password' type='password' value={this.state.password} onChange={this.handleChange} required={true} />
                    <label>Password</label>

                    {/* Submit button */}
                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        );
    }
}
