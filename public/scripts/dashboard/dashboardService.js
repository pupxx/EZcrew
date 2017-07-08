(function() {
  console.log('dashboardService.js is connected');
  'use strict';

  angular
  .module('app')
  .service('dashboardService', dashboardService)

  dashboardService.$inject = ['API_BASE_URL','$http']


  function dashboardService(baseUrl, $http) {




  }

})()
