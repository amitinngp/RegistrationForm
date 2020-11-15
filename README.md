# RegistrationForm
**This is a simple registration form using react**

* A Component with email,password,confrim password and register button.
* Rules to be implmented.
    - User Name must be 8 characters and above.
    - Password should be 8 characters and above.
    - Confirm password should be equal to the password 
    - Register button must only be enabled if all rules are satisfied
    - error msg div at the top, show error msgs if any.


### Steps taken
In two ways i have implemented this functionality,
- Using Fomik and Yup
- React Hooks.

Although there are  scopes of improvement in current code which I was not able to cover due to time constraints.
I also tried to cover the topics realted to test using Jest and enzyme by writing downfew test case, but due 
mismatch of verison between enzyme and React i was getting few errors, which took some time to get resolved.

I will continue to update it, in future too.

### How to run application

Pre-requisite :
# To install formik (Form) and yup {validation schema}
- npm install formik yup 
# To install enzyme for test cases
- npm install enzyme
- npm install enzyme-adapter-react-16
- npm i --save-dev enzyme enzyme-adapter-react-16

Comand to run
- npm install (to install all dependency)
- npm start( To start the application)
- npm test ( To test the application)

![alt text](https://github.com/amitinngp/RegistrationForm/blob/main/Froms-Screens.png)


MY learning while building it.
- Formik took less time and clean and redable code.FormikForm folder in src
- Although its easier to implement, it requires a learning curve to implement and sometime hard to debug.
- If we write our own custom code for it may takes more time like i used in RegistrationForm Components, but we may have better hold on changes and implementation.
- Formik has a lot to offer which we can reutilize and to rebuild that again according to our own requirement will take a lot of time.
- Both are easy to customize. although Formik requires external bundle to include in our app.
- Formik is good solution to manage the form state,although if are making our own custom , that will give more flexibility in terms of modification and extension.
- It depends on time and resource, which approch is good.
- If you are thinking that code in RegistrationForm.js is repeatative the i agree with you.we can change the below code to similar to FormInput.js to make it more cleaner, but in order to understanding the flow i have kept it as it is.May be later i will change it.

```
<input
            className="formInput"
            type="text"
            name="userName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName || ""}
            placeholder="Please enter user name!"
            required
            autoComplete="off"
          />
```          
