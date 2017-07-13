console.log('ergIndex is connected');
(function(){
  angular.module('app')
  .component('ergIndex', {
    controller: controller,
    templateUrl: './scripts/erg/ergIndex.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'ergService']
  function controller (baseUrl, $http, $state, ergService){
    const vm = this


    vm.$onInit = onInit;


    function onInit (){
      ergService.getErgResults(1).then(()=>{
        vm.ergResults = ergService.ergResults.data
        console.log(vm.ergResults);
      })
    }

    ergService.getUpcomingErgTest().then(()=>{
      vm.upcomingTest = ergService.upcomingTest
      console.log(vm.upcomingTest);
    })



  }


})()
