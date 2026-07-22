/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
const shorthands = undefined;

const up = (pgm) => {
  pgm.createTable('roles', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('gen_random_uuid()') },
    name: { type: 'varchar(100)', notNull: true, unique: true },
    description: { type: 'text' },
    created_at: { type: 'timestamp with time zone', notNull: true, default: pgm.func('current_timestamp') },
    updated_at: { type: 'timestamp with time zone', notNull: true, default: pgm.func('current_timestamp') },
    deleted_at: { type: 'timestamp with time zone' },
  });

  pgm.createTable('users', {
    id: { type: 'uuid', primaryKey: true, default: pgm.func('gen_random_uuid()') },
    role_id: {
      type: 'uuid',
      notNull: true,
      references: 'roles(id)',
      onDelete: 'restrict',
    },
    first_name: { type: 'varchar(100)', notNull: true },
    last_name: { type: 'varchar(100)', notNull: true },
    email: { type: 'varchar(255)', notNull: true, unique: true },
    phone: { type: 'varchar(30)' },
    password_hash: { type: 'varchar(255)', notNull: true },
    status: { type: 'varchar(20)', notNull: true, default: 'ACTIVE' },
    last_login: { type: 'timestamp with time zone' },
    created_at: { type: 'timestamp with time zone', notNull: true, default: pgm.func('current_timestamp') },
    updated_at: { type: 'timestamp with time zone', notNull: true, default: pgm.func('current_timestamp') },
    deleted_at: { type: 'timestamp with time zone' },
  });

  pgm.createIndex('users', 'email', { name: 'users_email_active_idx', where: 'deleted_at IS NULL' });
  pgm.createIndex('users', 'role_id');
};

const down = (pgm) => {
  pgm.dropTable('users');
  pgm.dropTable('roles');
};

module.exports = {
  shorthands,
  up,
  down,
};