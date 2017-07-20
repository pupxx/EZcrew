(function() {
  'use strict';

  angular
  .module('app')
  .service('profileService', profileService)

  profileService.$inject = ['API_BASE_URL','$http']


  function profileService(baseUrl, $http) {
    this.user = {}

    this.getUserInfo = ()=>{
      return $http.get(`/api-users/my-profile`).then((user)=>{
        this.user = user.data[0]
        return this.user;
      })
    }

    this.editUser = (id, body)=>{
      return $http.patch(`/api-users/edit/${id}`, body)
    }
  }
})()
