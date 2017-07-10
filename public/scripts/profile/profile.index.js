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
    vm.editUser = editUser;




    function onInit (){
      vm.show = false;
      profileService.getUserInfo().then((user)=>{
        // vm.user = user.data[0];
        console.log('ctrl:', user)
        console.log('profileService:', profileService.user)
        vm.user = user
        vm.user.position.toLowerCase()

        if(vm.user.position === 'p'){
          vm.user.position = 'Port';
        } else if(vm.user.position === 's'){
          vm.user.position = 'Starboard';
        }else if(vm.user.position === 'b'){
          vm.user.position = 'Port, Starboard';
        }else if (vm.user.position === 'pk'){
          vm.user.position = 'Port, Skull';
        }else if(vm.user.position === 'sk'){
          vm.user.position = 'Starboard, Skull';
        }else if(vm.user.position === 'bk'){
          vm.user.position = 'Port, Starboard, Skull';
        }
      });
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
