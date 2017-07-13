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

  static getPracticeAttendees (){
    let today = new Date()
    return knex('practices').where('date', '>=', 'today').orderBy('date', 'ASC').limit(1).then((practice)=>{
      let practiceId = practice[0].id
      return practiceId
    })
    .then((practiceId)=>{
      return knex('users_practices')
      .select('*', 'users.id as userID', 'users_practices.id as usersPracticeId', 'practices.id as practiceId')
      .innerJoin('users', 'users.id', 'users_practices.user_id')
      .innerJoin('practices', 'practices.id', 'users_practices.practice_id').where('practice_id', practiceId).andWhere('attending', '=', 'true');
    })
  }


}

module.exports = Practices
