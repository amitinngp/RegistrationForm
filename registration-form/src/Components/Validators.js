export default function Validators(values) {
  let errors = {};

  if (!values.userName) {
    errors.userName = "User Name is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userName)) {
    errors.userName = "Invalid email format";
  } else if (values.userName.length < 8) {
    errors.userName = "User Name must be 8 or more characters";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords must match";
  }
  
  return errors;
}
