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
      return $http.get(`/api-admin/practices/view-all`).then((allPractices)=>{
        this.allPractices = allPractices.data
      })
    }

    this.addPractice = (body)=>{
      return $http.post(`/api-admin/practices/add-practice`, body).then((addedPractice)=>{
        this.addedPractice = addedPractice.data
        return this.addedPractice;
      })
    }

    this.editPractice = (id, body)=>{
      return $http.put(`/api-admin/practices/edit/${id}`, body).then((editedPractice)=>{
        this.editedPractice = editedPractice.config.data
      })
    }

    this.deletePractice =(id)=>{
      return $http.delete(`/api-admin/practices/remove/${id}`).then((response)=>{
        console.log(response);
      })
    }

    this.addPracticeForAllUsers = (list)=>{
      return $http.post(`/api-practices/bulk-add`, list).then((confirmationId)=>{
        console.log(confirmationId);
      }).catch((err)=>{
        console.log(err);
      })
    }

    // ******************* Announcements *********************

    this.getAllAnnouncements = ()=>{
      return $http.get(`/api-admin/announcements`).then((allAnnouncements)=>{
        this.allAnnouncements = allAnnouncements.data
        return this.allAnnouncements
      })
    }

    this.addAnnouncement = (body)=>{
      return $http.post(`/api-admin/announcements/add-announcement`, body).then((addedAnnouncement)=>{
        this.addedAnnouncement = addedAnnouncement.data[0]
      })
    }

    this.editErgTest = (id, body)=>{
      return $http.put(`/api-erg/edit-erg-test/${id}`, body)
    }

    this.addErgTest = (body)=>{
      return $http.post(`/api-erg/add-erg-test`, body)
    }

    this.deleteErgTest = (id)=>{
      return $http.delete(`/api-admin/delete-erg-test/${id}`, id)
    }



  }
})()
