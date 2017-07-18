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
    vm.editUser = editUser;
    vm.formatPosition = formatPosition;





    function onInit (){
      vm.show = false;
      profileService.getUserInfo().then((user)=>{
        console.log('ctrl:', user)
        vm.user = user
        let position = vm.user.position.toLowerCase()
        vm.formatPosition(position)
      });
    }

    function formatPosition(position){
      if(position === 'p'){
        vm.user.position = 'Port';
      } else if(position === 's'){
        vm.user.position = 'Starboard';
      }else if(position === 'b'){
        vm.user.position = 'Port, Starboard';
      }else if (position === 'pk'){
        vm.user.position = 'Port, Skull';
      }else if(position === 'sk'){
        vm.user.position = 'Starboard, Skull';
      }else if(position === 'bk'){
        vm.user.position = 'Port, Starboard, Skull';
      }
    }

    function toggleForm(){
      if (vm.show === false){
        vm.show = true;
      }else{
        vm.show = false;
      }
    }

    function editUser(){
      let user = vm.user;
      id = vm.user.id
      delete vm.user
      profileService.editUser(id, user).then((user)=>{
        vm.user = user.data[0];
      })
    }




  }


})()
