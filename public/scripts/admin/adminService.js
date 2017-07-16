(function() {
  console.log("adminService is connected");
  'use strict';

  angular
  .module('app')
  .service('adminService', adminService)

  adminService.$inject = ['API_BASE_URL','$http']


  function adminService(baseUrl, $http) {

    this.getAllPractices = ()=>{
      return $http.get(`${baseUrl}/admin/practices`).then((allPractices)=>{
        this.allPractices = allPractices.data
        console.log(this.allPractices);
      });
    }



    this.editPractice = (id, body)=>{
      return $http.put(`${baseUrl}/admin/practices/edit/${id}`, body).then((editedPractice)=>{
        this.editedPractice = editedPractice.config.data
        
      })
    }

  }
})()