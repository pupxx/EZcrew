(function() {
  console.log("adminService is connected");
  'use strict';

  angular
  .module('app')
  .service('adminService', adminService)

  adminService.$inject = ['API_BASE_URL','$http']


  function adminService(baseUrl, $http) {




  }

})()
