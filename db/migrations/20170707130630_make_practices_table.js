exports.up = function(knex) {
  return knex.schema.createTable('practices', (table) => {
    table.increments();
    table.date('date').notNullable();
    table.text('practiceDescription').notNullable()
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('practices');
};
