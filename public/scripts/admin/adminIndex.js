(function(){
  angular.module('app')
  .component('adminIndex', {
    controller: controller,
    templateUrl: './scripts/admin/admin.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'adminService']
  function controller (baseUrl, $http, $state, adminService){
    const vm = this
    

    vm.$onInit = onInit;



    function onInit (){
      vm.show = false

    }


  }
})()
