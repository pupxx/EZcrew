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
      },{
		 id: 11,
        date: '2017-07-26',
        practiceDescription: 'Drills - U1/U2',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 12,
        date: '2017-07-29',
        practiceDescription: 'small boats or land',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 13,
        date: '2017-07-31',
        practiceDescription: 'Drills - T1/T2',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 14,
        date: '2017-08-02',
        practiceDescription: 'finish/release/recovery',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 15,
        date: '2017-08-05',
        practiceDescription: 'Working on the catch.',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 16,
        date: '2017-08-07',
        practiceDescription: 'drive/connection',
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
