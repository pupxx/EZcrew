console.log('dashboardIndex.js is connected');
(function(){
  angular.module('app')
  .component('dashboardIndex', {
    controller: dashboardController,
    templateUrl: './scripts/dashboard/dashboard.html'
  })

  dashboardController.$inject = ['API_BASE_URL', '$http', '$state', 'dashboardService']
  function profileController (baseUrl, $http, $state, dashboardService){
    const vm = this


    vm.$onInit = onInit;
    vm.message = 'I am on the profile page';
    vm.user = dashboardService.user


    function onInit (){
      vm.show = false
    
    }






  }


})()
