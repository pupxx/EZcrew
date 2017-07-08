exports.seed = function(knex) {
  return knex('practices').del()
    .then(() => {
      return knex('practices').insert([{
		 id: 1,
        date: new Date('2017-07-10'),
        practiceDescription: 'Stroke rate 22',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        date: new Date('2017-07-12'),
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        date: new Date('2017-07-15'),
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        date: new Date('2017-07-12'),
        practiceDescription: 'cancelled',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 5,
        date: new Date('2017-07-17'),
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 6,
        date: new Date('2017-07-19'),
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 7,
        date: new Date('2017-07-22'),
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 8,
        date: new Date('2017-07-03'),
        practiceDescription: 'land work today',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 9,
        date: new Date('2017-07-05'),
        practiceDescription: 'sprint',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 10,
        date: new Date('2017-07-08'),
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
