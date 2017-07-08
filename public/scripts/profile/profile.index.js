console.log('profile.index.js is connected');
(function(){
  angular.module('app')
  .component('profile.index', {
    controller: profileController,
    templateUrl: './scripts/profile/profile.html'
  })

  profileController.$inject = ['API_BASE_URL', '$http', '$state', 'profileService']
  function profileController (baseUrl, $http, $state, profileService){
    const vm = this


    vm.$onInit = onInit;
    vm.message = 'I am on the profile page';
    vm.user = profileService.user


    function onInit (){
      vm.show = false
      profileService.getUserInfo().then((user)=>{
        console.log(user.data);
        this.user = user.data[0]
        console.log(this.user);
      })
    }






  }


})()
