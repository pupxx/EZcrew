exports.up = function(knex) {
  return knex.schema.createTable('ergresults', (table) => {
    table.increments();
    table.integer('weight').notNullable();
    table.string('time').notNullable().defaultTo('00:00.0');
    table.string('avgSplit').notNullable().defaultTo('00:00.0');
    table.string('avgSr').notNullable().defaultTo(0);
    table.string('weightAdjustedScore').defaultTo('00:00.0');
    table.integer('user_id').references('users.id').onDelete('CASCADE').notNullable();
    table.integer('scheduledergtest_id').references('scheduledergtests.id').onDelete('CASCADE').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ergresults');
};
