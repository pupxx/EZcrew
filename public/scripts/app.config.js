(function() {
  angular
    .module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']

  function config( $stateProvider, $locationProvider, $urlRouterProvider){
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


    .state({
      name: 'admin',
      url: '/admin',
      component: 'adminIndex',
      redirectTo: 'admin.practice'
    })


// ************* Nested States *****************
    .state({
      name: 'admin.nested',
      url: '/nested',
      component: 'nestedComponent'
    })

    .state({
      name: 'admin.practice',
      url: '/practices',
      component: 'adminPractice'
    })

    .state({
      name: 'admin.addPractice',
      url: '/add-a-practice',
      component: 'admin.addPractice'
    })

    .state({
      name: 'admin.announcements',
      url: '/announcements',
      component: 'admin.announcements'
    })

    .state({
      name: 'admin.addAnnouncements',
      url: '/add-announcement',
      component: 'admin.addAnnouncements'
    })

  }
})()
