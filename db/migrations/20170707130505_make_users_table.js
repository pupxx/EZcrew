exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
      table.string('userFirstName').notNullable();
      table.string('userLastName').notNullable();
      table.date('dob').notNullable();
      table.string('phone').notNullable();
      table.string('userEmail').notNullable();
      table.string('position').notNullable();
      table.integer('weight').notNullable();
      table.string('gender').notNullable();
      table.boolean('admin').defaultTo(false);
      table.timestamps(true, true);

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
