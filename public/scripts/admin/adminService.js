(function() {
  console.log("adminService is connected");
  'use strict';

  angular
  .module('app')
  .service('adminService', adminService)

  adminService.$inject = ['API_BASE_URL','$http']

  // ******************* Practices **********************


  function adminService(baseUrl, $http) {
    this.getAllPractices = getAllPractices;
    this.allPractices;

    function getAllPractices (){
      return $http.get(`${baseUrl}/api-admin/practices/view-all`).then((allPractices)=>{
        this.allPractices = allPractices.data
      })
    }

    this.addPractice = (body)=>{
      return $http.post(`${baseUrl}/api-admin/practices/add-practice`, body).then((addedPractice)=>{
        this.addedPractice = addedPractice.data
        return this.addedPractice;
      })
    }

    this.editPractice = (id, body)=>{
      return $http.put(`${baseUrl}/api-admin/practices/edit/${id}`, body).then((editedPractice)=>{
        this.editedPractice = editedPractice.config.data
      })
    }

    this.deletePractice =(id)=>{
      return $http.delete(`${baseUrl}/api-admin/practices/remove/${id}`).then((response)=>{
        console.log(response);
      })
    }

    this.addPracticeForAllUsers = (list)=>{
      return $http.post(`${baseUrl}/api-practices/bulk-add`, list).then((confirmationId)=>{
      })
    }

    // ******************* Announcements *********************

    this.getAllAnnouncements = ()=>{
      return $http.get(`${baseUrl}/api-admin/announcements`).then((allAnnouncements)=>{
        this.allAnnouncements = allAnnouncements.data
        return this.allAnnouncements
      })
    }

    this.addAnnouncement = (body)=>{
      return $http.post(`${baseUrl}/api-admin/announcements/add-announcement`, body).then((addedAnnouncement)=>{
        this.addedAnnouncement = addedAnnouncement.data[0]
      })
    }

    this.editErgTest = (id, body)=>{
      return $http.put(`${baseUrl}/api-erg/edit-erg-test/${id}`, body)
    }

    this.addErgTest = (body)=>{
      return $http.post(`${baseUrl}/api-erg/add-erg-test`, body)
    }

  }
})()
