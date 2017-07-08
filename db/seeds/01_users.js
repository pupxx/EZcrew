exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
		 id: 1,
        userFirstName: 'Cheryln',
        userLastName: 'Barber',
        phone: '916-555-3456',
        userEmail: 'cherylnbarber@gmail.com',
        position: 'p',
        weight: 215,
        gender: 'F',
        admin: true,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        userFirstName: 'Tifany',
        userLastName: 'Knapp',
        phone: '916-555-9999',
        userEmail: 'email@gmail.com',
        position: 'p',
        weight: 145,
        gender: 'F',
        admin: true,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        userFirstName: 'Jim',
        userLastName: 'Johnson',
        phone: '530-444-3456',
        userEmail: 'jim@gmail.com',
        position: 'spsk',
        weight: 165,
        gender: 'M',
        admin: false,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
