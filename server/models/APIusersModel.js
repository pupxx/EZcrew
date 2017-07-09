const knex = require('../../db/connection.js')


class User{
  constructor(){
  }

  static getSingleUserInfo(){
    return knex('users').where('id', 1)
  }

  static editUser (id, user){
    return knex('users').where('id', id).update(user).returning('*')
  }
}


module.exports = User
