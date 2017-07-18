(function(){
  angular.module('app')
  .component('admin.erg', {
    controller: controller,
    templateUrl: './scripts/admin/admin.erg.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'adminService', 'ergService']
  function controller (baseUrl, $http, $state, adminService, ergService){
    const vm = this


    vm.$onInit = onInit;
    vm.toggleForm = toggleForm;
    vm.getAllErgTests = getAllErgTests;
    vm.hideForm = hideForm;



    function onInit (){
      vm.show = false

      vm.getAllErgTests()


    }

    function toggleForm(ergTest){
      vm.ergTest = ergTest
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

    function getAllErgTests(){
      ergService.getAllErgTests().then((allErgTests)=>{
        console.log(allErgTests);
        vm.allErgTests = ergService.allErgTests
        vm.allErgTests.forEach((el)=>{
          el.scheduledFor = moment(el.scheduledFor).format('LL')
        })
      })
    }

  }
})()
