const knex = require('../../db/connection.js');

class Admin{
  constructor(){}

  static getAllPractices(){
    return knex('practices')
  }

  static addPractice(practice){
    return knex('practices').insert(practice).returning('*')
  }

  static editSinglePractice(id, body){
    knex('practices').where('id', id).update(body).returning('*')
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
