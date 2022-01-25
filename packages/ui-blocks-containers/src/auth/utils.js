export const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// Minimum eight characters, at least one letter and one number:
// export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Minimum eight characters
export const PASSWORD_REGEX = /^.{8,}$/;

export const VALIDATION_ERRORS = {
  email: 'Email is invalid',
  password: 'Password should include minimum 8 characters'
};

export const HELPER_TEXTS = {
  password: 'Password should include minimum 8 characters'
};
