console.log('ergIndex is connected');
(function(){
  angular.module('app')
  .component('ergIndex', {
    controller: controller,
    templateUrl: './scripts/erg/ergIndex.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'ergService']
  function controller (baseUrl, $http, $state, ergService){
    const vm = this


    vm.$onInit = onInit;
    vm.weightAdjustedErgScore = weightAdjustedErgScore;
    vm.toggleForm = toggleForm;
    vm.addErgTestResult = addErgTestResult


    function onInit (){
      vm.show = false;

      ergService.getErgResults(1).then(()=>{
        vm.ergResults = ergService.ergResults.data
      });
    }

    function toggleForm(){
      if (vm.show === false){
        vm.show = true;
      }else{
        vm.show = false;
      }
    }


    ergService.getUpcomingErgTest().then(()=>{
      vm.upcomingTest = ergService.upcomingTest
      // vm.upcomingTest.id is being used in addErgTestResult()
      vm.upcomingTest.scheduledFor = moment(vm.upcomingTest.scheduledfor).format('dddd MMMM Do')
    });

    function weightAdjustedErgScore(result){
      let ergtestId = result.scheduledErgId;
      ergService.weightAdjustedErgScore(ergtestId).then(()=>{
        vm.averageTeamWeight = ergService.finalAvergeWeight;
        let userTime = moment.duration('00:' + result.time)
        console.log(userTime, 'before adjusted');
        let adjustedScoreMilliSeconds = userTime * Math.pow((result.weight/vm.averageTeamWeight), .222)
        console.log(adjustedScoreMilliSeconds, 'after adjusted');
        let finalAdjustedScore = moment(adjustedScoreMilliSeconds).format('mm:s:S')
        console.log(finalAdjustedScore.toString());
        result.weightAdjustedScore = finalAdjustedScore;
      });
    }

    function addErgTestResult(){
      let allTestInfo = {
        userId: 1,
        ergTestId: vm.upcomingTest.id,
        body: vm.ergTest
      }

      ergService.addErgTestResult(allTestInfo).then(()=>{
        vm.addedTest = ergService.addedTest
        console.log(vm.addedTest);
      })
    }



  }


})()
