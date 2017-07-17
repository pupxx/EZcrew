exports.seed = function(knex) {
  return knex('announcements').del()
    .then(() => {
      return knex('announcements').insert([{
		 id: 1,
        announcement: 'Practice is cancelled',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('announcements_id_seq', (SELECT MAX(id) FROM announcements));"
      );
    });
};
