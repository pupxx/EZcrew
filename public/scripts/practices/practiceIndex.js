
(function(){
  angular.module('app')
  .component('practiceIndex', {
    controller: practicesController,
    templateUrl: './scripts/practices/practices.html'
  })

  practicesController.$inject = ['API_BASE_URL', '$http', '$state', 'practiceService', 'profileService']
  function practicesController (baseUrl, $http, $state, practiceService, profileService){
    const vm = this


    vm.$onInit = onInit;
    vm.editUserPracticeAttendance = editUserPracticeAttendance


    function onInit (){
      vm.show = false
      profileService.getUserInfo().then((user)=>{
        this.user = user
        console.log('this is my user', user);
      })
      practiceService.getPracticeDates().then((dates)=>{
        vm.practices = dates.data

        vm.practices.forEach((el)=>{
          el.date = moment(el.date).format('dddd MMMM Do');
        });
      });
    }

    function editUserPracticeAttendance (practice){
      vm.practice = practice
      let id = vm.user.id
      let editedPractice = {
        practice_id: vm.practice.practice_id,
        attending: vm.practice.attending
      }

      practiceService.editUserPracticeAttendance(id, editedPractice)
    }


  }
})()


// user_id: 1,
// practice_id: 1,
// attending: false,
