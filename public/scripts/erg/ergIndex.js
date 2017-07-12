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
    vm.message = 'On the erg html page'


    function onInit (){
      console.log('on init in ergIndex');
      ergService.sayHello()
    }




  }


})()
