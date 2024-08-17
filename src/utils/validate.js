export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // const isNameValid = /^[A-Za-z]+(?:[-' ][A-Za-z]+)*$/.test(name);

  if (!isEmailValid) return "Oops!! Email is not valid";
  if (!isPasswordValid) return "Oops!! Password is not valid";
  // if (!isNameValid) return "Oops!! Name is not valid ";

  return null;
};
