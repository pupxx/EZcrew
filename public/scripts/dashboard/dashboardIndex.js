console.log('dashboardIndex.js is connected');
(function(){
  angular.module('app')
  .component('dashboardIndex', {
    controller: dashboardController,
    templateUrl: './scripts/dashboard/dashboard.html'
  })

  dashboardController.$inject = ['API_BASE_URL', '$http', '$state', 'dashboardService']
  function dashboardController (baseUrl, $http, $state, dashboardService){
    const vm = this


    vm.$onInit = onInit;


    function onInit (){
      vm.show = false
      dashboardService.getPracticeDates().then((dates)=>{
        vm.practices = dates.data

        let day = vm.practices[0].date
        console.log(day);

        // if(moment(day).isAfter('2017-07-10')){
        //   console.log(true);
        // }else{
        //   console.log(false);
        // }

        vm.practices.forEach((el)=>{
          el.date = moment(el.date).format('dddd MMMM Do');
        })
      })

    }






  }


})()
