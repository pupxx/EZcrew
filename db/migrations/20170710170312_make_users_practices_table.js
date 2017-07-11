exports.up = function(knex) {
  return knex.schema.createTable('users_practices', (table) => {
    table.increments();
    table.integer('user_id').references('users.id').onDelete('CASCADE');
    table.integer('practice_id').references('practices.id').onDelete('CASCADE')
    table.boolean('attending').defaultTo(false)
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_practices');
};
