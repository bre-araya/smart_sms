const test = require('node:test');
const assert = require('node:assert/strict');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { AuthService, AuthenticationError } = require('../src/modules/auth/auth.service');

test('AuthService.login returns a token and safe user data for active users', async () => {
  const passwordHash = await bcrypt.hash('correct-password', 4);
  const repository = {
    findActiveUserByEmail: async () => ({
      id: 'user-1',
      first_name: 'Aster',
      last_name: 'Bekele',
      email: 'aster@example.com',
      phone: '+251900000000',
      password_hash: passwordHash,
      status: 'ACTIVE',
      role_name: 'School Admin',
    }),
  };
  const service = new AuthService(repository, {
    jwtSecret: 'test-secret',
    jwtExpiresIn: '15m',
  });

  const result = await service.login({
    email: 'aster@example.com',
    password: 'correct-password',
  });
  const claims = jwt.verify(result.accessToken, 'test-secret');

  assert.equal(claims.sub, 'user-1');
  assert.equal(result.user.email, 'aster@example.com');
  assert.equal(result.user.role, 'School Admin');
  assert.equal(result.user.passwordHash, undefined);
});

test('AuthService.login rejects invalid credentials', async () => {
  const repository = {
    findActiveUserByEmail: async () => null,
  };
  const service = new AuthService(repository, {
    jwtSecret: 'test-secret',
    jwtExpiresIn: '15m',
  });

  await assert.rejects(
    service.login({ email: 'missing@example.com', password: 'wrong-password' }),
    AuthenticationError,
  );
});