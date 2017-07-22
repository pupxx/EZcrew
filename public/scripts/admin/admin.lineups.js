(function(){
  angular.module('app')
  .component('admin.lineups', {
    controller: controller,
    templateUrl: './scripts/admin/admin.lineups.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'adminService', 'userService', 'practiceService']
  function controller (baseUrl, $http, $state, adminService, userService, practiceService){
    const vm = this


    vm.$onInit = onInit;
    vm.attendees = [];

    vm.boat1 = []
    vm.boat2 = []
    vm.boat3 = []
    vm.boat4 = []
    vm.dragControlListeners = {
      itemMoved: function (event) {

      }
    }



    function onInit (){
      vm.show = false

      practiceService.getPracticeDates().then((dates)=>{
        vm.practices = dates.data
        let nextDay = dates.data[0].date
        vm.nextPracticeId = dates.data[0].id;
        vm.nextPracticeDate = moment(nextDay).format('LL')
      }).then(()=>{
        practiceService.whoIsAttendingPractice(vm.nextPracticeId).then(()=>{
          vm.attendees = practiceService.attendees;
          adminService.displayPosition(vm.attendees)
        })
      })



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
