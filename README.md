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

![alt text](https://github.com/amitinngp/RegistrationForm/blob/main/Two%20ways%20of%20implementation.png)
![alt text](https://github.com/amitinngp/RegistrationForm/blob/main/ErrorMsg.png)
