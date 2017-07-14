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
    vm.getErgResults = getErgResults;
    vm.weightAdjustedErgScore = weightAdjustedErgScore;
    vm.toggleForm = toggleForm;
    vm.addErgTestResult = addErgTestResult;
    vm.weightAdjustedFormula = weightAdjustedFormula;


    function onInit (){
      vm.show = false;
      vm.getErgResults()


    }


    function toggleForm(){
      if (vm.show === false){
        vm.show = true;
      }else{
        vm.show = false;
      }
    }

    function getErgResults (){
      ergService.getErgResults(1).then(()=>{
        vm.ergResults = ergService.ergResults.data
      })
    }

    ergService.getUpcomingErgTest().then(()=>{
      vm.upcomingTest = ergService.upcomingTest
      // vm.upcomingTest.id is being used in addErgTestResult()
      vm.upcomingTest.scheduledFor = moment(vm.upcomingTest.scheduledfor).format('dddd MMMM Do')
    });

    function weightAdjustedErgScore(result){
      let ergtestId = result.scheduledErgId;
      ergService.weightAdjustedErgScore(ergtestId).then(()=>{
        weightAdjustedFormula(result)
      });
    }

    function weightAdjustedFormula(result){
      vm.averageTeamWeight = ergService.finalAvergeWeight;
      let userTime = moment.duration('00:' + result.time)
      let adjustedScoreMilliSeconds = userTime * Math.pow((result.weight/vm.averageTeamWeight), .222)
      let finalAdjustedScore = moment(adjustedScoreMilliSeconds).format('mm:ss:S')
      result.weightAdjustedScore = finalAdjustedScore;
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
        delete vm.ergTest
      }).then(()=>{
        vm.getErgResults()
      });
    }



  }
})()
