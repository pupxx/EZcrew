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

}

module.exports = Admin
