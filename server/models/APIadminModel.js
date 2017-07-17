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
    return knex('users_practices').insert(array)
  }

  static editSinglePractice(id, body){
    console.log('hello from model');
    console.log(body);
    console.log(id, 'in the controller');
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

}

module.exports = Admin
