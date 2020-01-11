import React from 'react';

/* Import SASS Style Sheet */
import './form-input.styles.scss';

/* Functional Component for the Form Input field.

- handleChange is passed in so I can "bubble up"
any onChange attributes that the input field has. 

- The props passed in with the spread operator will be
all other props that were passed to the original native <form>
element in sign-in.component.jsx; that means the name, type, value,
and required attributes.
*/
export const FormInput = ({ handleChange, label, ...props}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...props} />
        {
            /* Nested ternary operators may prove confusing in the future

            Logic is really simple, though:
                - If a label is passed in, then render a label element. Otherwise, render nothing (null)
                - If user provided some value (i.e if they typed anything in this field), 
                then add the 'shrink' class. Otherwise, add nothing. The form-input-label
                class should always be a part of the element. 
            */
            label ? <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>{ label }</label> : null
        }
    </div>
)
