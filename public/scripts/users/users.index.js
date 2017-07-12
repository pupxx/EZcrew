(function(){
  angular.module('app')
  .component('users.index', {
    controller: controller,
    templateUrl: './scripts/users/users.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'userService']
  function controller (baseUrl, $http, $state, userService){
    const vm = this


    vm.$onInit = onInit;
    vm.toggleForm = toggleForm;

    function onInit (){
      vm.show = false
    }

    function toggleForm(){
      if(vm.show === false){
        vm.show = true
      } else{
        vm.show = false
      }
    }



  }


})()
