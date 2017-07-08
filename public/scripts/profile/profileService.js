(function() {
  console.log('profileService.js is connected');
  'use strict';

  angular
  .module('app')
  .service('profileService', profileService)

  profileService.$inject = ['API_BASE_URL','$http']


  function profileService(baseUrl, $http) {


    this.getUserInfo = ()=>{
      return $http.get(`${baseUrl}/api-users/my-profile`)
    }


  }

})()
