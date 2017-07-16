(function() {
  console.log("adminService is connected");
  'use strict';

  angular
  .module('app')
  .service('adminService', adminService)

  adminService.$inject = ['API_BASE_URL','$http']


  function adminService(baseUrl, $http) {

    this.getAllPractices = ()=>{
      return $http.get(`${baseUrl}/admin/practices/view-all`).then((allPractices)=>{
        this.allPractices = allPractices.data
        console.log(this.allPractices);
      });
    }

    this.addPractice = (body)=>{
      return $http.post(`${baseUrl}/admin/practices/add-practice`, body).then((addedPractice)=>{
        console.log(addedPractice);
      })
    }

    this.editPractice = (id, body)=>{
      return $http.put(`${baseUrl}/admin/practices/edit/${id}`, body).then((editedPractice)=>{
        this.editedPractice = editedPractice.config.data
      })
    }

    this.deletePractice =(id)=>{
      return $http.delete(`${baseUrl}/admin/practices/remove/${id}`).then((response)=>{
        console.log(response);
      })
    }

  }
})()
