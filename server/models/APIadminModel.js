const knex = require('../../db/connection.js');

class Admin{
  constructor(){}

  static getAllPractices(){
    return knex('practices').orderBy('date', 'ASC')
  }

  static getPracticeById(id){
      return knex('practices').where('id', id)
  }

  static addPractice(practice){
    return knex('practices').insert(practice).returning('*')
  }

  static addPracticeToAllUsers(array){
    return knex('users_practices').insert(array).returning('*')
  }

  static editSinglePractice(id, body){
    return knex('practices').where('id', id).update(body).returning('*')
  }

  static deletePractice(id){
    return knex('practices').where('id', id).del()
  }

  static getAllAnnouncements(){
    return knex('announcements').orderBy('created_at', 'DESC')
  }

  static addAnnouncement(body){
    return knex('announcements').insert(body).returning('*')
  }

  static editAnnouncement(id, body){
    return knex('announcements').where('id', id).update(body).returning('*')
  }

  static getAllErgTests(){
    return knex('scheduledergtests').orderBy('scheduledFor', 'DESC')
  }

  static addErgTest(body){
    return knex('scheduledergtests').insert(body).returning('*')
  }

  static editErgTest(id, body){
    return knex('scheduledergtests').where('id', id).update(body).returning('*')
  }

  static deleteErgTest(id){
    return knex('scheduledergtests').where('id', id).del()
  }

  static getAllErgResults(){
    return knex('ergresults')
    .select('*', 'ergresults.id as ergResultsID', 'scheduledergtests.id as scheduledergtestsID', 'users.id as userID')
    .innerJoin('users', 'users.id', 'ergresults.user_id')
    .innerJoin('scheduledergtests', 'scheduledergtests.id', 'ergresults.scheduledergtest_id')
  }

}

module.exports = Admin
