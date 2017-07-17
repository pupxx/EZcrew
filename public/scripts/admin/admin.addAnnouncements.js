(function(){
  angular.module('app')
  .component('admin.addAnnouncements', {
    controller: controller,
    templateUrl: './scripts/admin/admin.addAnnouncements.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'adminService']
  function controller (baseUrl, $http, $state, adminService){
    const vm = this


    vm.$onInit = onInit;
    vm.addAnnouncement = addAnnouncement



    function onInit (){
      vm.show = false
    }


    function addAnnouncement(){
      let body = {announcement: vm.announcement}
      adminService.addAnnouncement(body).then(()=>{
        vm.addedAnnouncement = adminService.addedAnnouncement.announcement
      })
    }

  }
})()
