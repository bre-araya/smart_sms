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

module.exports = {
  validateLoginInput,
};