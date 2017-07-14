console.log('ergService.js is connected');
(function() {
  'use strict';

  angular
  .module('app')
  .service('ergService', ergService)

  ergService.$inject = ['API_BASE_URL','$http']


  function ergService(baseUrl, $http) {

    this.getErgResults = (id)=>{
      return $http.get(`${baseUrl}/api-erg/get-results/${id}`).then((ergResults)=>{
        this.ergResults = ergResults;
      });
    }

    this.getUpcomingErgTest = ()=>{
      return $http.get(`${baseUrl}/api-erg/upcoming-erg-test`).then((upcomingTest)=>{
        this.upcomingTest = upcomingTest.data[0];
        console.log(this.upcomingTest.id, 'upcoming test id');
      })
    }

    this.weightAdjustedErgScore = (id)=>{
      return $http.get(`${baseUrl}/api-erg/${id}-erg-results`).then((ergResults)=>{
        this.ergResults = ergResults.data
        let numberOfRowers = this.ergResults.length;
        let totalWeight = 0;
        this.ergResults.forEach((el)=>{
          totalWeight += el.weight
        })
        let averageWeight =  totalWeight / numberOfRowers;
        this.finalAvergeWeight = Number(averageWeight.toFixed(2));
        return this.finalAvergeWeight;
      })
    }

    this.addErgTestResult = (body)=>{
      return $http.post(`${baseUrl}/api-erg/add-new-result`, body).then((addedTest)=>{
        this.addedTest = addedTest;
      });
    }

  }

})()
