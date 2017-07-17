(function(){
  angular.module('app')
  .component('admin.addAnnouncements', {
    controller: controller,
    templateUrl: './scripts/admin/admin.addAnnouncements.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'adminService']
  function controller (baseUrl, $http, $state, adminService){
    const vm = this

    vm.addAnnouncement = addAnnouncement;

    vm.$onInit = onInit;
    vm.message = 'Adding Announcements page'



    function onInit (){
      vm.show = false
    }


    function addAnnouncement(){
      console.log(vm.announcement);
    }

  }
})()
