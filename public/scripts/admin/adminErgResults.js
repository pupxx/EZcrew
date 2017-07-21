(function (){
  console.log('admin.ergResults.js connected');
  angular.module('app')
  .component('adminErgResults', {
    controller: adminPracticeController,
    templateUrl: './scripts/admin/adminErgResults.html'
  })

  adminPracticeController.$inject = ['API_BASE_URL', '$http', '$state', 'adminService', 'practiceService']

  function adminPracticeController (baseUrl, $http, $state, adminService, practiceService){
    const vm = this


    vm.$onInit = onInit;
    vm.toggleForm = toggleForm;
    vm.message = "hello from the ergResults page"


    function onInit (){
      vm.show = false;

    }

    function toggleForm(practice){
      vm.practice = practice
      if(vm.show === false){
        vm.show = true
      } else{
        vm.show = false
      }
    }

    function hideForm(){
      if(vm.show === true){
        vm.show = false
      }
    }






    function setTab(num){
        vm.tab = num;
    }
  }



})()
