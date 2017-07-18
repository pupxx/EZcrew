exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
		 id: 1,
        userFirstName: 'Cheryln',
        userLastName: 'Barber',
        dob: '1973-10-26',
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
        dob: '1978-12-04',
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
        dob: '1975-04-09',
        phone: '530-444-3456',
        userEmail: 'jim@gmail.com',
        position: 'bc',
        weight: 165,
        gender: 'M',
        admin: false,
        created_at: new Date(),
        updated_at: new Date()
      },{
   id: 4,
      userFirstName: 'Jean',
      userLastName: 'Ford',
      dob: '1970-06-17',
      phone: '444-333-6789',
      userEmail: 'jeanford@gmail.com',
      position: 's',
      weight: 130,
      gender: 'F',
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
