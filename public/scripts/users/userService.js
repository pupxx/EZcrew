(function() {
  'use strict';

  angular
  .module('app')
  .service('userService', userService)

  userService.$inject = ['API_BASE_URL','$http']


  function userService(baseUrl, $http) {

    this.getAllUsers = ()=>{
      return $http.get(`${baseUrl}/api-users`).then((allUsers)=>{
        this.allUsers = allUsers.data
      })
    }


  }

})()
