const knex = require('../../db/connection.js')

class Erg {
  constructor (){

  }

  static getErgResults(id){
    return knex('ergresults')
    .select('*', 'ergresults.id as ergresultsId', 'scheduledergtests.id as scheduledErgId')
    .innerJoin('scheduledergtests', 'scheduledergtests.id', 'ergresults.scheduledergtest_id')
    .where('user_id', id)
    .orderBy('scheduledFor', 'ASC')
  }

  static getupcomingTest(){
    let today = new Date()
    return knex('scheduledergtests')
    .orderBy('scheduledFor', 'ASC')
    .where('scheduledFor', '>=', 'today')
  }

  static getErgResultByid (id){
    console.log('in the model');
    return knex('ergresults')
    .where('scheduledergtest_id', id)
  }
}

module.exports = Erg
