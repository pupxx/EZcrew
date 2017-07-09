console.log('dashboardIndex.js is connected');
(function(){
  angular.module('app')
  .component('dashboardIndex', {
    controller: dashboardController,
    templateUrl: './scripts/dashboard/dashboard.html'
  })

  dashboardController.$inject = ['API_BASE_URL', '$http', '$state', 'dashboardService']
  function dashboardController (baseUrl, $http, $state, dashboardService){
    const vm = this


    vm.$onInit = onInit;
    vm.message = 'I am on the dashboard page';



    function onInit (){
      vm.show = false
      dashboardService.getPracticeDates().then((dates)=>{
        console.log(dates);
      })

    }






  }


})()
