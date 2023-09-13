const validatePassword = (password: string) => {
  let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
};

const validatePasswordLength = (password: string) => {
  let re = /^.{8,}$/;
  return re.test(password);
};

const validatePasswordUppercase = (password: string) => {
  let re = /^(?=.*[A-Z]).+$/;
  return re.test(password);
};

const validatePasswordSpecialCharacter = (password: string) => {
  let re = /^(?=.*[!@#$%^&*]).+$/;
  return re.test(password);
};

export {
  validatePasswordLength,
  validatePasswordUppercase,
  validatePasswordSpecialCharacter,
  validatePassword,
};
