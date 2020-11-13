import React from 'react'
import './App.css';
import FormikRegistrationForm from './FormikForm/FormikRegistrationForm';
import  RegistrationForm from './Components/RegistrationForm';
function App() {
  return (
   <React.Fragment>
     <FormikRegistrationForm/>
     <RegistrationForm/>
   </React.Fragment>
  );
}

export default App;
