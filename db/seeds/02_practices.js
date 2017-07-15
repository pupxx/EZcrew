exports.seed = function(knex) {
  return knex('practices').del()
    .then(() => {
      return knex('practices').insert([{
		 id: 1,
        date: '2017-07-03',
        practiceDescription: 'Stroke rate 22',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        date: '2017-07-05',
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        date: '2017-07-08',
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        date: '2017-07-10',
        practiceDescription: 'cancelled',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 5,
        date: '2017-07-12',
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 6,
        date: '07-15-2017',
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 7,
        date: '2017-07-17',
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 8,
        date: '2017-07-19',
        practiceDescription: 'land work today',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 9,
        date: '2017-07-22',
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 10,
        date: '2017-07-24',
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('practices_id_seq', (SELECT MAX(id) FROM practices));"
      );
    });
};
