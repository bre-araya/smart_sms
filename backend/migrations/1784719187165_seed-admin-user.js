/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
const shorthands = undefined;

const up = async (pgm) => {
  await pgm.sql(`
    INSERT INTO roles (id, name, description, created_at, updated_at)
    SELECT gen_random_uuid(), 'School Admin', 'Default administrator role', current_timestamp, current_timestamp
    WHERE NOT EXISTS (SELECT 1 FROM roles WHERE name = 'School Admin');
  `);

  await pgm.sql(`
    UPDATE users
    SET first_name = 'System',
        last_name = 'Admin',
        phone = '+251 714 066 921'
    WHERE email = 'admin@smart-sms.com';
  `);

  await pgm.sql(`
    INSERT INTO users (id, role_id, first_name, last_name, email, phone, password_hash, status, created_at, updated_at)
    SELECT gen_random_uuid(), r.id, 'System', 'Admin', 'admin@smart-sms.com', '+251 714 066 921',
      '$2b$10$cfkPe/8sb.ReWvFP21a5P.d7SsI9ABnT.1dQG33./YVssmJq2phDW', 'ACTIVE', current_timestamp, current_timestamp
    FROM roles r
    WHERE r.name = 'School Admin'
      AND NOT EXISTS (SELECT 1 FROM users WHERE email = 'admin@smart-sms.com');
  `);
};

const down = async (pgm) => {
  await pgm.sql(`DELETE FROM users WHERE email = 'admin@smart-sms.com';`);
  await pgm.sql(`
    DELETE FROM roles
    WHERE name = 'School Admin'
      AND id NOT IN (SELECT DISTINCT role_id FROM users);
  `);
};

module.exports = {
  shorthands,
  up,
  down,
};
