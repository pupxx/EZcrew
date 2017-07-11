console.log('practiceIndex.js is connected');
(function(){
  angular.module('app')
  .component('practiceIndex', {
    controller: practicesController,
    templateUrl: './scripts/practices/practices.html'
  })

  practicesController.$inject = ['API_BASE_URL', '$http', '$state', 'practiceService']
  function practicesController (baseUrl, $http, $state, practiceService){
    const vm = this


    vm.$onInit = onInit;
    vm.editUserPracticeAttendance = editUserPracticeAttendance



    vm.newDay = new Date()
    vm.newDateInside = new Date('2017-01-02')
    vm.justDate = Date('2017-03-04')
    vm.momentDate = moment(vm.justDate).format('ll')




    function onInit (){
      vm.show = false
      practiceService.getPracticeDates().then((dates)=>{
        vm.practices = dates.data
        console.log(vm.practices);

        let day = vm.practices[0].date
        console.log(day);
        let today = new Date();
        let comparingDay = moment(today)

        vm.practices.forEach((el)=>{
          el.date = moment(el.date).format('dddd MMMM Do');
        });
      });
    }

    function editUserPracticeAttendance (practice){
      vm.practice = practice
      console.log("this one", vm.practice);
      // let id = userPractice.id
      // practiceService.editUserPracticeAttendance(id)
    }


  }
})()
