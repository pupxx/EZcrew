(function() {
  console.log('profileService.js is connected');
  'use strict';

  angular
  .module('app')
  .service('profileService', profileService)

  profileService.$inject = ['API_BASE_URL','$http']


  function profileService(baseUrl, $http) {
    this.user = {}

    this.getUserInfo = ()=>{
      return $http.get(`${baseUrl}/api-users/my-profile`).then((user)=>{
        console.log("hi I'm the user", user);
        this.user = user.data[0]
        console.log('service:', this.user)
        return this.user;
      })
    }

    this.editUser = (id, body)=>{
      return $http.patch(`${baseUrl}/api-users/edit/${id}`, body)
    }


  }

})()
