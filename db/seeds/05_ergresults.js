exports.seed = function(knex) {
  return knex('ergresults').del()
    .then(() => {
      return knex('ergresults').insert([{
		 id: 1,
        weight: 215,
        time: '07:37.8',
        avgSplit: '01:02.5',
        avgSr: 34,
        weightAdjustedScore: '00:00.0',
        user_id: 1,
        scheduledergtest_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        weight: 130,
        time: '08:43.6',
        avgSplit: '01:25.9',
        avgSr: 33,
        weightAdjustedScore: '00:00.0',
        user_id: 3,
        scheduledergtest_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        weight: 185,
        time: '07:27.9',
        avgSplit: '01:01.4',
        avgSr: 35,
        weightAdjustedScore: '00:00.0',
        user_id: 4,
        scheduledergtest_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('ergresults_id_seq', (SELECT MAX(id) FROM ergresults));"
      );
    });
};
