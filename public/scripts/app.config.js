(function() {
  angular
    .module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$locationProvider']

  function config( $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
    .state({
      name: 'home',
      url: '/',
      redirectTo: 'dashboard'
    })

    .state({
      name: 'users',
      url: '/users',
      component: 'users.index'
    })

    .state({
      name: 'dashboard',
      url: '/dashboard',
      component: 'dashboardIndex'
    })

    .state({
      name: 'profile',
      url: '/profile',
      component: 'profile.index'
    })

    .state({
      name: 'practices',
      url: '/attendance',
      component: 'practiceIndex'
    })

    .state({
      name: 'erg',
      url: '/erg-tests-and-results',
      component: 'ergIndex'
    })


    //
    // .state({
    //   name: 'newGame',
    //   url: '/games/newGame',
    //   component: 'new.game'
    // })

    // .state({
    //   name: 'story.index', url: '/stories', component: 'stories.index'
    // })

    // .state({
    //   name: 'story.show', url: '/stories/:id', component: 'stories.show'
    // })
  }
})()
