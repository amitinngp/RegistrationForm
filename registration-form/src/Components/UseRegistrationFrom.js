
import { useState, useEffect } from 'react';

const useRegistrationFrom = (registration ,validationOf) => {
    // Values ,Errors , hanldeChange and handelSubmit idea i have taken from Formik.
    const [values, setValues] = useState({}); 
    const [errors, setError] = useState({});
    const [isRegistered, setFormRegistered] = useState(false);
    const [isValid, setValidate] = useState(false);

    const handleChange = (event) => {
        // we will copy using spread operator and the manupulate the values changes with key:value as targetName:targetValue
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        setFormRegistered(true); 
        setError(validationOf(values));
    }
    const handleSubmit = (event) => {
        if(event)  {
            event.preventDefault();
        } 
        setFormRegistered(true); 
        setError(validationOf(values));
    }

    useEffect(() => {
        setValues(()=> values);
        setFormRegistered(true); 
        setError(validationOf(values));
    },[values,validationOf]);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isRegistered) {
            setValidate(true)
            registration();
        }
      }, [errors, isRegistered ,registration]);
    return {
        values,
        handleChange,
        handleSubmit,
        errors,
        isValid
      }
}

export default useRegistrationFrom
