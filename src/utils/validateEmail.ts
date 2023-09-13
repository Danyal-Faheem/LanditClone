const validateEmail = (email: string) => {
  let re = /^[^s@]+@[^s@]+.[^s@]+$/;
  return re.test(email);
};

export default validateEmail;
