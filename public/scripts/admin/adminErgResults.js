(function (){
  console.log('admin.ergResults.js connected');
  angular.module('app')
  .component('adminErgResults', {
    controller: adminPracticeController,
    templateUrl: './scripts/admin/adminErgResults.html'
  })

  adminPracticeController.$inject = ['API_BASE_URL', '$http', '$state', 'adminService', 'practiceService', 'userService']

  function adminPracticeController (baseUrl, $http, $state, adminService, practiceService, userService){
    const vm = this


    vm.$onInit = onInit;
    vm.toggleForm = toggleForm;
    vm.getAllErgResults = getAllErgResults;


    function onInit (){
      vm.show = false;
      vm.getAllErgResults()
      userService.getAllUsers().then(()=>{
        vm.users = userService.allUsers
      })

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

    function getAllErgResults(){
      adminService.getAllErgResults().then(()=>{
        vm.results = adminService.results
        console.log(vm.results);
      })
    }





    function setTab(num){
        vm.tab = num;
    }
  }



})()
