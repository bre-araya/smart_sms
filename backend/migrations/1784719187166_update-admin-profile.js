/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
const shorthands = undefined;

const up = async (pgm) => {
  await pgm.sql(`
    UPDATE users
    SET first_name = 'System',
        last_name = 'Admin',
        phone = '+251 714 066 921'
    WHERE email = 'admin@smart-sms.com';
  `);
};

const down = async (pgm) => {
  await pgm.sql(`
    UPDATE users
    SET phone = '+000000000'
    WHERE email = 'admin@smart-sms.com';
  `);
};

module.exports = {
  shorthands,
  up,
  down,
};
