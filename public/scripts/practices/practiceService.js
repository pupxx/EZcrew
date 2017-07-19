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

    this.whoIsAttendingPractice = (id)=>{
      if(id){
        return $http.get(`${baseUrl}/api-practices/attendees/${id}`, id).then((attendees)=>{
          this.attendees = attendees.data
          console.log(this.attendees);
          return this.attendees
        })
      } else{
        return $http.get(`${baseUrl}/api-practices/attendees`).then((attendees)=>{
          this.attendees = attendees.data
          return this.attendees
        })
      }

    }

    this.getWeather = ()=>{
      return $http.get('https://api.wunderground.com/api/98df7348c668dee6/forecast/q/CA/San_Francisco.json').then((weather)=>{
        this.weather = weather
        return this.weather;
      })
      .then((weather)=>{
        return   $http.get('https://api.wunderground.com/api/98df7348c668dee6/conditions/q/WA/Seattle.json').then((daysConditions)=>{
          let allWeather = {
            forecast: weather,
            day: daysConditions
          }
          return allWeather;
        })
      })
    }

  }

})()
