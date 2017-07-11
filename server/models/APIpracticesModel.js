const knex = require('../../db/connection.js')

class Practices {
  constructor(){

  }
  static getAllPractices(){
    // return knex('practices').orderBy('date', 'DESC')
    return knex('*')
    .from('users_practices').select('users_practices.id as userPractice.id', 'practices.id as practices.id', 'users_practices.attending', 'practices.practiceDescription', 'practices.date').innerJoin('practices', 'practices.id', 'users_practices.id').where('users_practices.user_id', 1).orderBy('date', 'ASC')
  }

}

module.exports = Practices
