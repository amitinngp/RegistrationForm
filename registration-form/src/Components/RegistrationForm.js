import React from "react";
import useRegistrationFrom from "./UseRegistrationFrom";
import Validators from "./Validators";

const RegistrationForm = () => {
  const { values, handleChange, handleSubmit, errors ,handleBlur,isRegistered ,dirtyCheck} = useRegistrationFrom(
    registration,
    Validators
  );

  function registration() {
    console.log("data",values);
  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box" noValidate>
        <div className="title">
          <label>Hook Registration Form</label>
        </div>
        <div className="form-error">
          <label>{errors.userName?errors.userName :(errors.password?errors.password:(errors.confirmPassword?errors.confirmPassword:null))}</label>
        </div>
        <div className="form-field">
          <div className="label"><label >User Name</label></div>
          <div className="field">
          <input
            className="formInput"
            type="text"
            name="userName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName || ""}
            placeholder="Please enter your email!"
            required
            autoComplete="off"
          />
          </div>
        </div>
        <div className="form-field">
          <div className="label"><label>Password</label></div>
          <div className="field">
          <input
            className="formInput"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleSubmit}
            value={values.password || ""}
            placeholder="Please enter password!"
            required
          />
          </div>
        </div>
        <div className="form-field">
          <div className="label"><label>Confirm Password</label></div>
          <div className="field">
          <input
            className="formInput"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword || ""}
            placeholder="Please enter same password again!"
            required
          /></div>
          </div>
          <div className="btnRegister">
            <button type="button" type="submit" className="register" disabled={(Object.keys(dirtyCheck).length > 2)}>
              Register
            </button>
          </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
