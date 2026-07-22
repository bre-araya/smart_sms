const AuthRepository = require('./auth.repository');
const { AuthService } = require('./auth.service');
const { validateLoginInput } = require('./auth.validation');
const { db } = require('../../config/database');
const env = require('../../config/env');

const authService = new AuthService(new AuthRepository(db), env);

async function login(req, res, next) {
  const input = validateLoginInput(req.body);

  if (Object.keys(input.errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      data: input.errors,
    });
  }

  try {
    const data = await authService.login(input);

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      data,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  login,
};