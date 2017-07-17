exports.up = function(knex) {
  return knex.schema.createTable('announcements', (table) => {
    table.increments();
    table.text('announcement').notNullable()
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('announcements');
};
