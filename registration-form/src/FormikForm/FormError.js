import React from 'react'
import { ErrorMessage } from 'formik';
function FormError(props) {
    //it is always good to use class or module css, but just to show case the inline css
    const errorStyle = {
        color: 'red',
      };
    const {errors,touched} = props;

    if(errors && touched){
        return errors.userName && touched.userName ? 
                    <div style={errorStyle}><ErrorMessage  name="userName"/></div> : 
               errors.password && touched.password? 
                    <div className="error"><ErrorMessage style={errorStyle} name="password"/></div> : 
               errors.confirmPassword && touched.confirmPassword?
                    <div className="error"><ErrorMessage name="confirmPassword"/></div> : 
                <React.Fragment/>  
    }
}

export default FormError
