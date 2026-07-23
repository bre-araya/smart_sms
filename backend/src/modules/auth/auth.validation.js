function validateLoginInput(input = {}) {
  const email = typeof input.email === 'string' ? input.email.trim().toLowerCase() : '';
  const password = typeof input.password === 'string' ? input.password : '';
  const errors = {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'A valid email is required';
  }

  if (!password) {
    errors.password = 'Password is required';
  }

  return { email, password, errors };
}

function validateForgotPasswordInput(input = {}) {
  const email = typeof input.email === 'string' ? input.email.trim().toLowerCase() : '';
  const errors = {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'A valid email is required';
  }

  return { email, errors };
}

function validateResetPasswordInput(input = {}) {
  const token = typeof input.token === 'string' ? input.token.trim() : '';
  const password = typeof input.password === 'string' ? input.password : '';
  const confirmPassword = typeof input.confirmPassword === 'string' ? input.confirmPassword : '';
  const errors = {};

  if (!token) {
    errors.token = 'Reset token is required';
  }

  if (!password) {
    errors.password = 'New password is required';
  }

  if (password.length > 0 && password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  return { token, password, errors };
}

function validateChangePasswordInput(input = {}) {
  const currentPassword = typeof input.currentPassword === 'string' ? input.currentPassword : '';
  const newPassword = typeof input.newPassword === 'string' ? input.newPassword : '';
  const confirmPassword = typeof input.confirmPassword === 'string' ? input.confirmPassword : '';
  const errors = {};

  if (!currentPassword) {
    errors.currentPassword = 'Current password is required';
  }

  if (!newPassword) {
    errors.newPassword = 'New password is required';
  }

  if (newPassword.length > 0 && newPassword.length < 8) {
    errors.newPassword = 'New password must be at least 8 characters';
  }

  if (newPassword !== confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  return { currentPassword, newPassword, errors };
}

module.exports = {
  validateLoginInput,
  validateForgotPasswordInput,
  validateResetPasswordInput,
  validateChangePasswordInput,
};
