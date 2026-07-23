/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
const shorthands = undefined;

const up = (pgm) => {
  pgm.createTable('password_reset_tokens', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('gen_random_uuid()') },
    user_id: {
      type: 'uuid',
      notNull: true,
      references: 'users(id)',
      onDelete: 'cascade',
    },
    token: { type: 'varchar(255)', notNull: true, unique: true },
    expires_at: { type: 'timestamp with time zone', notNull: true },
    used_at: { type: 'timestamp with time zone' },
    created_at: { type: 'timestamp with time zone', notNull: true, default: pgm.func('current_timestamp') },
    deleted_at: { type: 'timestamp with time zone' },
  });

  pgm.createIndex('password_reset_tokens', 'user_id');
  pgm.createIndex('password_reset_tokens', 'token');
};

const down = (pgm) => {
  pgm.dropTable('password_reset_tokens');
};

module.exports = {
  shorthands,
  up,
  down,
};
