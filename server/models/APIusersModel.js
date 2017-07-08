const knex = require('../../db/connection.js')


class User{
  constructor(){
  }

  static getSingleUserInfo(){
    return knex('users').where('id', 1)
  }

}


module.exports = User
