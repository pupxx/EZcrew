
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
    vm.editUserPracticeAttendance = editUserPracticeAttendance;
    vm.practiceAttendance = practiceAttendance;



    function onInit (){

      vm.show = false
      profileService.getUserInfo().then((user)=>{
        this.user = user
      })
      practiceService.getPracticeDates().then((dates)=>{
        vm.practices = dates.data

        vm.practices.forEach((el)=>{
          el.date = moment(el.date).format('dddd MMMM Do');
        });
      });

      practiceService.whoIsAttendingPractice().then(()=>{
         vm.attendees = practiceService.attendees;
         console.log(vm.attendees);
         let day = vm.attendees[0].date
         vm.date = moment(day).format('LL');
      });

      practiceService.getWeather().then((weather)=>{
        vm.weatherArray = weather.data.forecast.simpleforecast.forecastday
        console.log(vm.weatherArray, 'again');
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

    function practiceAttendance (){
         practiceService.whoIsAttendingPractice().then(()=>{
         vm.attendees = practiceService.attendees;
         console.log(vm.attendees);
         let day = vm.attendees[0].date
         vm.date = moment(day).format('LL')
      })
    }


  }
})()


// user_id: 1,
// practice_id: 1,
// attending: false,
