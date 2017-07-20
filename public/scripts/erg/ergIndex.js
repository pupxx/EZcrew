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
      vm.upcomingTest.scheduledFor = moment(vm.upcomingTest.scheduledFor).format('dddd MMMM Do')

    });

    function weightAdjustedErgScore(result){
      let ergtestId = result.scheduledErgId;
      ergService.whoCompletedTheErgTest(ergtestId).then((averageTeamWeight)=>{
        ergService.weightAdjustedFormula(result)
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
        delete vm.ergTest
      }).then(()=>{
        vm.getErgResults()
      });
    }
  }
})()
