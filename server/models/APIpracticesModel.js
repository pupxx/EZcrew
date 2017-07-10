const knex = require('../../db/connection.js')

class Practices {
  constructor(){

  }
  static getAllPractices(){
    return knex('practices').orderBy('date', 'DESC')
  }

}

module.exports = Practices
