console.log('dashboardIndex.js is connected');
(function(){
  angular.module('app')
  .component('dashboardIndex', {
    controller: dashboardController,
    templateUrl: './scripts/dashboard/dashboard.html'
  })

  dashboardController.$inject = ['API_BASE_URL', '$http', '$state', 'dashboardService', 'profileService']
  function dashboardController (baseUrl, $http, $state, dashboardService, profileService){
    const vm = this


    vm.$onInit = onInit;
    vm.message = 'hello';


    function onInit (){
      vm.show = false
      profileService.getUserInfo().then((user)=>{
        vm.admin = user.data[0].admin
        console.log(vm.admin);
      })
    }



  }
})()
