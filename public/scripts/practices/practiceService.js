(function() {
  console.log('practiceService.js is connected');
  'use strict';

  angular
  .module('app')
  .service('practiceService', practiceService)

  practiceService.$inject = ['API_BASE_URL','$http']


  function practiceService(baseUrl, $http) {

    this.getPracticeDates =  ()=>{
      return $http.get(`${baseUrl}/api-practices`)
    }

    // this.editUserPracticeAttendance = (id)=>{
    //   return $http.put(`${baseUrl}/api-practices/edit/${id}`).then((edited)=>{
    //     console.log(edited);
    //   })
    // }
  }

})()
