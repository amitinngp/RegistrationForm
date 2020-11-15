
import { useState, useEffect } from 'react';

const useRegistrationFrom = (registration ,validationOf) => {
    // Values ,Errors , hanldeChange and handelSubmit idea i have taken from Formik.
    const [values, setValues] = useState({}); 
    const [errors, setError] = useState({});
    const [isRegistered, setFormRegistered] = useState(false);
    const [dirtyCheck, setdirtyCheck] = useState({});
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

    const handleBlur = (event) => {
        setdirtyCheck({...dirtyCheck,[event.target.name]:event.target.value});
        if(Object.keys(dirtyCheck).length > 2 && Object.keys(errors).length===0){
            setValidate(true);
        }
        setFormRegistered(false); 
        setError(validationOf(values));
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isRegistered) {
            registration();
        }
      }, [errors, isRegistered ,registration]);
    return {
        values,
        handleChange,
        handleSubmit,
        errors,
        handleBlur,
        isRegistered,
        dirtyCheck,
        isValid
      }
}

export default useRegistrationFrom
