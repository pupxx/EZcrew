(function() {
  'use strict';

  angular
  .module('app')
  .service('practiceService', practiceService)

  practiceService.$inject = ['API_BASE_URL','$http']


  function practiceService(baseUrl, $http) {

    this.getPracticeDates =  ()=>{
      return $http.get(`${baseUrl}/api-practices`)
    }

    this.editUserPracticeAttendance = (id, body)=>{
      return $http.put(`${baseUrl}/api-practices/edit/${id}`, body).then((edited)=>{
      })
    }

    this.whoIsAttendingPractice = ()=>{
      return $http.get(`${baseUrl}/api-practices/attendees`).then((attendees)=>{
        this.attendees = attendees.data
        console.log();
        return this.attendees
      })
    }

    this.getWeather = ()=>{
      return $http.get('http://api.wunderground.com/api/98df7348c668dee6/forecast/q/CA/San_Francisco.json').then((weather)=>{
        this.weather = weather
        console.log('service',this.weather);
        return this.weather;
      })
      .then((weather)=>{
      return   $http.get('http://api.wunderground.com/api/98df7348c668dee6/conditions/q/WA/Seattle.json').then((daysConditions)=>{
        let allWeather = {
          forecast: weather,
          day: daysConditions
        }
        console.log(allWeather, 'heres is all the weather');
        return allWeather;
      })
      })
    }

  }

})()
