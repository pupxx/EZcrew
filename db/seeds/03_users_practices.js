exports.seed = function(knex) {
  return knex('users_practices').del()
    .then(() => {
      return knex('users_practices').insert([{
		 id: 1,
        user_id: 1,
        practice_id: 1,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        user_id: 1,
        practice_id: 2,
        attending: true,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        user_id: 1,
        practice_id: 3,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        user_id: 1,
        practice_id: 4,
        attending: true,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 5,
        user_id: 1,
        practice_id: 5,
        attending: true,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 6,
        user_id: 1,
        practice_id: 6,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 7,
        user_id: 1,
        practice_id: 7,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 8,
        user_id: 1,
        practice_id: 8,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 9,
        user_id: 1,
        practice_id: 9,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 10,
        user_id: 1,
        practice_id: 10,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 11,
        user_id: 2,
        practice_id: 1,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 12,
        user_id: 2,
        practice_id: 2,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 13,
        user_id: 2,
        practice_id: 3,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 14,
        user_id: 2,
        practice_id: 4,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 15,
        user_id: 2,
        practice_id: 5,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 16,
        user_id: 2,
        practice_id: 6,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 17,
        user_id: 2,
        practice_id: 7,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 18,
        user_id: 2,
        practice_id: 8,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 19,
        user_id: 2,
        practice_id: 9,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 20,
        user_id: 2,
        practice_id: 10,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 21,
        user_id: 3,
        practice_id: 1,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 22,
        user_id: 3,
        practice_id: 2,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 23,
        user_id: 3,
        practice_id: 3,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 24,
        user_id: 3,
        practice_id: 4,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 25,
        user_id: 3,
        practice_id: 5,
        attending: true,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 26,
        user_id: 3,
        practice_id: 6,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 27,
        user_id: 3,
        practice_id: 7,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 28,
        user_id: 3,
        practice_id: 8,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 29,
        user_id: 3,
        practice_id: 9,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 30,
        user_id: 3,
        practice_id: 10,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 31,
        user_id: 4,
        practice_id: 1,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 32,
        user_id: 4,
        practice_id: 2,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 33,
        user_id: 4,
        practice_id: 3,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 34,
        user_id: 4,
        practice_id: 4,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 35,
        user_id: 4,
        practice_id: 5,
        attending: true,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 36,
        user_id: 4,
        practice_id: 6,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 37,
        user_id: 4,
        practice_id: 7,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 38,
        user_id: 4,
        practice_id: 8,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 39,
        user_id: 4,
        practice_id: 9,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 40,
        user_id: 4,
        practice_id: 10,
        attending: false,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_practices_id_seq', (SELECT MAX(id) FROM users_practices));"
      );
    });
};
