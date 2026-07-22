const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

function requireEnvironmentVariable(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

module.exports = {
  port: Number(process.env.PORT || 5000),
  jwtSecret: requireEnvironmentVariable('JWT_SECRET'),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '15m',
};