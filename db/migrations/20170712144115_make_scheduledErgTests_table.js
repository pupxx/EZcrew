exports.up = function(knex) {
  return knex.schema.createTable('scheduledergtests', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('testDescription').defaultTo('-');
    table.date('scheduledFor').notNullable();
    table.string('scheduleCategory').notNullable();
    table.string('year').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('scheduledergtests');
};
