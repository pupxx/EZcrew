(function(){
  angular.module('app')
  .component('admin.addPractice', {
    controller: controller,
    templateUrl: './scripts/admin/admin.addPractice.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'adminService', 'userService']
  function controller (baseUrl, $http, $state, adminService, userService){
    const vm = this


    vm.$onInit = onInit;
    vm.toggleForm = toggleForm;
    vm.addPractice = addPractice;

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

    // function addPractice(){
    //   let body = vm.practice;
    //   adminService.addPractice(body)
    // }


    // this function will add a practice to the practices table and then it will post that practice with each of the users_practices table adding the practice once for each user so we can manage attendance.
    // This allows the user to edit an already existing practice when they check the box for attendance.
    function addPractice(){
      let body = vm.practice;
      delete vm.practice;
      adminService.addPractice(body).then(()=>{
        userService.getAllUsers().then(()=>{
          vm.allUsers = userService.allUsers;
          vm.addedPractice = adminService.addedPractice;

          let list = []
          vm.allUsers.forEach((el)=>{
            let userPractice = {
              user_id: el.id,
              practice_id: vm.addedPractice.id,
              attending: false
            }
            list.push(userPractice)
          })
          return list
        })
        .then((ArrayToPost)=>{
          let list = {
            ArrayToPost
          }
          adminService.addPracticeForAllUsers(list);
        })
      })
    }


  }


})()
