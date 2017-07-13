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


    function onInit (){
      ergService.getErgResults(1).then(()=>{
        vm.ergResults = ergService.ergResults.data
        console.log('!!!!!!!!', vm.ergResults)

      })
    }

    ergService.getUpcomingErgTest().then(()=>{
      vm.upcomingTest = ergService.upcomingTest
      // console.log(vm.upcomingTest);
    })

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
      })
    }
    //
    // var time = moment.duration('00:07:26.1')
    //  var seconds = moment.duration(time).asSeconds()
    //  console.log(time);
    //  console.log(seconds);

//     =TEXT(((J5*86400)*(M5/$M$18)^0.222)/86400,"m:ss.0")
//
// J5 = raw 2K in m:ss.x format
//
// M5 = weight in lbs
//
// M18 = average weight in lbs



  }


})()
