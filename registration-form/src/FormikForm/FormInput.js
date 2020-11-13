import React from 'react';
import { Field } from 'formik';

// This is a reuable funcatrional component ,it can be futher improvised if we have more  of it.

function FormInput(props) {
    const { label, name, ...rest } = props; // destructuring props.
    return (
        <div className='form-field'>
        <div className="label"><label  htmlFor={name}>{label}</label></div>
        <div className="field"><Field id={name} name={name} {...rest} autoComplete="off"/></div>
        
      </div>
    )
}

export default FormInput


