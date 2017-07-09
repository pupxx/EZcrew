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
    vm.message = 'hello'


    function onInit (){
      vm.show = false
      practiceService.getPracticeDates().then((dates)=>{
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
        });
      });



    }
  }
})()
