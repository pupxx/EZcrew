const knex = require('../../db/connection.js')

class Practices {
  constructor(){

  }
  static getAllPractices(){
    let today = new Date()
    // return knex('practices').orderBy('date', 'DESC')

    return knex('users_practices')
    .select('*', 'users_practices.id as userPractice_id', 'practices.id as practices_id')
    .innerJoin('practices', 'practices.id', 'users_practices.id')
    .where('users_practices.user_id', 1)
    .andWhere('practices.date', '>=', 'today')
  }

  static editIndividualPractice (id, practiceId, editedPractice){
    return knex('users_practices')
    .where('user_id',  id)
    .andWhere('practice_id', practiceId)
    .update(editedPractice).returning('*')
  }

}

module.exports = Practices
