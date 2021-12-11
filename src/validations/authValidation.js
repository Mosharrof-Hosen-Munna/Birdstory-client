export const nameValidation = ({ firstName, lastName }) => {
  const errors = {};
  if (firstName.length === 0) {
    errors.firstName = "This field can not be emty!";
  }
  if (lastName.length === 0) {
    errors.lastName = "This field can not be Emty!";
  }
  if (firstName.length > 20) {
    errors.firstName = "First Name must be between 20 charaters";
  }
  if (lastName.length > 10) {
    errors.lastName = "Last Name must be between 10 charaters";
  }
  return errors;
};
