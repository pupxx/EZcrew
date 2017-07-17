
(function(){
  angular.module('app')
  .component('practiceIndex', {
    controller: practicesController,
    templateUrl: './scripts/practices/practices.html'
  })

  practicesController.$inject = ['API_BASE_URL', '$http', '$state', 'practiceService', 'profileService', 'adminService']
  function practicesController (baseUrl, $http, $state, practiceService, profileService, adminService){
    const vm = this


    vm.$onInit = onInit;
    vm.editUserPracticeAttendance = editUserPracticeAttendance;
    vm.practiceAttendance = practiceAttendance;
    vm.onpracticepage = true;



    function onInit (){

      vm.show = false
      profileService.getUserInfo().then((user)=>{
        this.user = user
      })
      practiceService.getPracticeDates().then((dates)=>{
        vm.practices = dates.data
        let nextDay = dates.data[0].date
        vm.nextPracticeDate = moment(nextDay).format('LL')

        vm.practices.forEach((el)=>{
          el.date = moment(el.date).format('dddd MMMM Do');
        });
      });

      practiceService.whoIsAttendingPractice().then(()=>{
         vm.attendees = practiceService.attendees;
      });

      practiceService.getWeather().then((allWeather)=>{
        vm.weatherArray = allWeather.forecast.data.forecast.simpleforecast.forecastday
        vm.currentConditions = allWeather.day.data.current_observation
      });

      adminService.getAllAnnouncements().then((allAnnouncements)=>{
        vm.currentAnnouncement = allAnnouncements[0].announcement
      })
    }



    function editUserPracticeAttendance (practice){
      vm.practice = practice
      let id = vm.user.id
      let editedPractice = {
        practice_id: vm.practice.practice_id,
        attending: vm.practice.attending
      }
      practiceService.editUserPracticeAttendance(id, editedPractice).then(()=>{
        vm.practiceAttendance()
      })
    }

    function practiceAttendance (){
         practiceService.whoIsAttendingPractice().then(()=>{
         vm.attendees = practiceService.attendees;
      })
    }


  }
})()
