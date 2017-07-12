console.log('ergService.js is connected');
(function() {
  'use strict';

  angular
  .module('app')
  .service('ergService', ergService)

  ergService.$inject = ['API_BASE_URL','$http']


  function ergService(baseUrl, $http) {

    this.sayHello = ()=>{
      console.log('hello from teh service page');
    }



  }

})()
