(function (){
  console.log('nested.js connected');
  angular.module('app')
    .component('nestedComponent', {
      controller: nestedAdminController,
      templateUrl: './scripts/nested/nested.html'
    })

    nestedAdminController.$inject = ['API_BASE_URL', '$http', '$state']

    function nestedAdminController (baseUrl, $http, $state){
      const vm = this

      vm.$onInit = onInit;





      function onInit (){
        vm.message = 'Here I am'
      }
    }
})()
