(function(){
  angular.module('app')
  .component('admin.announcements', {
    controller: controller,
    templateUrl: './scripts/admin/admin.announcements.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'adminService']
  function controller (baseUrl, $http, $state, adminService){
    const vm = this


    vm.$onInit = onInit;
    vm.message = 'On the admin- announcement page'



    function onInit (){
      vm.show = false



    }


  }
})()
