const knex = require('../../db/connection.js')

class Erg {
  constructor (){

  }

  static getAllErgTests(){
    return knex('scheduledergtests').orderBy('scheduledFor', 'ASC')
  }

  static getErgResults(id){
    return knex('ergresults')
    .select('*', 'ergresults.id as ergresultsId', 'scheduledergtests.id as scheduledErgId')
    .innerJoin('scheduledergtests', 'scheduledergtests.id', 'ergresults.scheduledergtest_id')
    .where('user_id', id)
    .orderBy('scheduledFor', 'DESC')
  }

  static getupcomingTest(){
    let today = new Date()
    return knex('scheduledergtests')
    .orderBy('scheduledFor', 'ASC')
    .where('scheduledFor', '>=', 'today')
  }

  static getErgResultByid (id){
    return knex('ergresults')
    .where('scheduledergtest_id', id)
  }

  static addNewErgResult(ergResult){
    return knex('ergresults').insert(ergResult).returning('*')
  }

  static editErgTest(id, ergTest){
    return knex('scheduledergtests').update(ergTest).where('id', id).returning('*')
  }

  static addErgTest(body){
    return knex('scheduledergtests').insert(body).returning('*')
  }

  
}

module.exports = Erg
