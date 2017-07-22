(function (){
  angular.module('app')
  .component('adminErgResults', {
    controller: adminPracticeController,
    templateUrl: './scripts/admin/adminErgResults.html'
  })

  adminPracticeController.$inject = ['API_BASE_URL', '$http', '$state', 'adminService', 'practiceService', 'userService']

  function adminPracticeController (baseUrl, $http, $state, adminService, practiceService, userService){
    const vm = this


    vm.$onInit = onInit;
    vm.genderArray = ['M', 'F'];
    vm.toggleForm = toggleForm;
    vm.getAllErgResults = getAllErgResults;
    vm.getPr = getPr;


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
      adminService.getAllErgResults().then((results)=>{
        vm.results = results
        adminService.displayPosition(vm.results)
      })
    }


    function getPr(result){
      let id = result.userID
      vm.timeArray = [];
      vm.dateArray = [];
      vm.results.forEach((el)=>{
        if (el.userID === result.userID){
          vm.timeArray.push(el.time)
        }
        result.prRaw = vm.timeArray[0]

        vm.dateArray.push(el.scheduleCategory)
        vm.dateArray = vm.dateArray.sort()
        vm.dateArray = vm.dateArray.filter(function(el, i, self) {
          return i == self.indexOf(el);
        })
      })
    }

    function setTab(num){
      vm.tab = num;
    }
    
  }
})()
