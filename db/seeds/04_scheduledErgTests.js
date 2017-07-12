exports.seed = function(knex) {
  return knex('scheduledergtests').del()
    .then(() => {
      return knex('scheduledergtests').insert([{
		 id: 1,
        title: '2k',
        testDescription: 'Keep rate to a 22',
        scheduledFor: '2017-07-10',
        scheduleCategory: 'July',
        year: '2017',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        title: '6k',
        testDescription: 'Meet at the boat house at 6:30pm',
        scheduledFor: '2017-10-24',
        scheduleCategory: 'October',
        year: '2017',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        title: '6k',
        testDescription: '6k erg test for time.',
        scheduledFor: '2018-01-05',
        scheduleCategory: 'January',
        year: '2018',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        title: '2k',
        testDescription: '-',
        scheduledFor: '2018-04-18',
        scheduleCategory: 'April',
        year: '2018',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 5,
        title: '2k',
        testDescription: 'We will keep the boathouse open late for those that can\'t make the regular scheduled time.',
        scheduledFor: '2018-06-04',
        scheduleCategory: 'June',
        year: '2018',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 6,
        title: '2k',
        testDescription: '2k for March',
        scheduledFor: '2017-03-19',
        scheduleCategory: 'March',
        year: '2017',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('scheduledergtests_id_seq', (SELECT MAX(id) FROM scheduledergtests));"
      );
    });
};
