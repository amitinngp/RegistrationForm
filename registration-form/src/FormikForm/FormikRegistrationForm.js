import React from "react";
import { Formik, Form } from "formik";
import FormInput from "./FormInput";
import * as Yup from "yup";
import FormError from "./FormError";

function FormikRegistrationForm() {
  const initialValue = {
    userName: "",
    password: "",
    confirmPassword: ""
  };

  //This text can be stored in others files for i18n implementation, but for now i am using as string.
  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(8, "User Name must be 8 characters and above.")
      .max(16, "User Name max 16 characters allowed.")
      .required("User Name Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters and above.")
      .max(16, "Password max 16 characters allowed.")
      .required("Password Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("confirm Password Required"),
  });

  const onRegister = (values) => {
    console.log("Registration Form data", values);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onRegister}
      >
        {(formik) => {
          return (
            <Form className="form-box">
              <div className="title">
                <label>Formik Registration Form</label>
              </div>
              <div className="form-error">
                <FormError errors={formik.errors} touched={formik.touched} />
              </div>
              <FormInput
                className="formInput"
                type="text"
                label="User Name"
                name="userName"
                placeholder="Please enter user name!"
              />
              <FormInput
                className="formInput"
                type="password"
                label="Password"
                name="password"
                placeholder="Please enter password!"
              />
              <FormInput
                className="formInput"
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Please enter same password again!"
              />
              <div className="btnRegister" data-test='btnRegister'>
                <button
                  data-test='btnregister'
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                  className="register"
                >
                  Register
                </button>
              </div>
              <div className="valueSubmitted">{JSON.stringify(formik.values)}</div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormikRegistrationForm;
