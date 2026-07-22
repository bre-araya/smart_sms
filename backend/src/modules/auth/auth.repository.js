class AuthRepository {
  constructor(database) {
    this.database = database;
  }

  async findActiveUserByEmail(email) {
    const result = await this.database.query(
      `SELECT
         u.id,
         u.first_name,
         u.last_name,
         u.email,
         u.phone,
         u.password_hash,
         u.status,
         r.name AS role_name
       FROM users u
       JOIN roles r ON r.id = u.role_id
       WHERE LOWER(u.email) = $1
         AND u.deleted_at IS NULL
         AND r.deleted_at IS NULL
       LIMIT 1`,
      [email],
    );

    return result.rows[0] || null;
  }
}

module.exports = AuthRepository;