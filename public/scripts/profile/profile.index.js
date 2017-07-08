console.log('profile.index.js is connected');
(function(){
  angular.module('app')
  .component('profile.index', {
    controller: profileController,
    templateUrl: './scripts/profile/profile.html'
  });

  profileController.$inject = ['API_BASE_URL', '$http', '$state', 'profileService']
  function profileController (baseUrl, $http, $state, profileService){
    const vm = this;


    vm.$onInit = onInit;
    vm.toggleForm = toggleForm;
    vm.message = 'I am on the profile page';


    function onInit (){
      vm.show = false;
      profileService.getUserInfo().then((user)=>{
        console.log(user.data[0]);
        vm.user = user.data[0]

      });
    }

    function toggleForm(){
      if (vm.show === false){
        vm.show = true;
      }else{
        vm.show = false;
      }
    }






  }


})()
