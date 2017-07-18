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
    vm.setTab = setTab
    vm.toggleForm = toggleForm;
    vm.getAllErgTests = getAllErgTests;
    vm.hideForm = hideForm;
    vm.editErgTest = editErgTest;
    vm.addErgTest = addErgTest;



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

    function setTab(num){
      vm.tab = num
    }

    function getAllErgTests(){
      ergService.getAllErgTests().then((allErgTests)=>{
        vm.allErgTests = ergService.allErgTests
        vm.allErgTests.forEach((el)=>{
          el.scheduledFor = moment(el.scheduledFor).format('LL')
        })
      })
    }

    function editErgTest(){
      let body = vm.ergTest
      let id = vm.ergTest.id
      adminService.editErgTest(id, body).then((editedTest)=>{
        vm.getAllErgTests()
      })
    }

    function addErgTest(){
      let body = vm.addedErgTest;
      adminService.addErgTest(body).then(()=>{
        vm.getAllErgTests()
      })
    }

  }
})()
