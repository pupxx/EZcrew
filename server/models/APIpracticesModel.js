const knex = require('../../db/connection.js')

class Practices {
  constructor(){

  }
  static getAllPractices(){
    return knex('practices')
  }

}

module.exports = Practices
