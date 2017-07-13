console.log('ergService.js is connected');
(function() {
  'use strict';

  angular
  .module('app')
  .service('ergService', ergService)

  ergService.$inject = ['API_BASE_URL','$http']


  function ergService(baseUrl, $http) {

    this.getErgResults = (id)=>{
      return $http.get(`${baseUrl}/api-erg/get-results/${id}`).then((ergResults)=>{
        this.ergResults = ergResults;
      });
    }

    this.getUpcomingErgTest = ()=>{
      return $http.get(`${baseUrl}/api-erg/upcoming-erg-test`).then((upcomingTest)=>{
        this.upcomingTest = upcomingTest.data[0];
      })
    }

  }

})()
