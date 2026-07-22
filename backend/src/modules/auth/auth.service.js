const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthenticationError extends Error {
  constructor(message = 'Invalid email or password') {
    super(message);
    this.name = 'AuthenticationError';
    this.status = 401;
  }
}

class AuthService {
  constructor(repository, { jwtSecret, jwtExpiresIn }) {
    this.repository = repository;
    this.jwtSecret = jwtSecret;
    this.jwtExpiresIn = jwtExpiresIn;
  }

  async login({ email, password }) {
    const user = await this.repository.findActiveUserByEmail(email);
    const passwordMatches = user 
                      ? await bcrypt.compare(password, user.password_hash) 
                      : false;

    if (!passwordMatches || user.status !== 'ACTIVE') {
      throw new AuthenticationError();
    }

    const token = jwt.sign(
      { sub: user.id, role: user.role_name, email: user.email },
      this.jwtSecret,
      { expiresIn: this.jwtExpiresIn },
    );

    return {
      accessToken: token,
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
        role: user.role_name,
      },
    };
  }
}

module.exports = {
  AuthService,
  AuthenticationError,
};