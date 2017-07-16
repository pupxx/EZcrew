(function(){
  angular.module('app')
  .component('admin.addPractice', {
    controller: controller,
    templateUrl: './scripts/admin/admin.addPractice.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'adminService']
  function controller (baseUrl, $http, $state, adminService){
    const vm = this


    vm.$onInit = onInit;
    vm.toggleForm = toggleForm;
    vm.addPractice = addPractice;

    function onInit (){
      vm.show = false
    }

    function toggleForm(){
      if(vm.show === false){
        vm.show = true
      } else{
        vm.show = false
      }
    }

    function addPractice(){
      let body = vm.practice;
      delete vm.practice;
      adminService.addPractice(body).then(()=>{

      })
    }


  }


})()
