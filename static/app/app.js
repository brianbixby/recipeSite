angular.module('App', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider)
      // specify custom types for $resource
      {
      //   $resourceProvider.defaults.actions = {
      //   create: {method: 'POST'},
      //   get:    {method: 'GET'},
      //   getAll: {method: 'GET', isArray:true},
      //   update: {method: 'PUT'},
      //   delete: {method: 'DELETE'}
      // };
      $urlRouterProvider.otherwise('/');

      $httpProvider.interceptors.push('AuthInterceptor');

      //Setup states (routes)
      $stateProvider
      .state('homeState', {
        url: '/',
        component: 'homeComp'
      })
      .state('loginState', {
        url: '/login',
        component: 'loginComp'
      })
      .state('signupState', {
        url: '/signup',
        component: 'signupComp'
      })
      .state('testState', {
        url: '/test',
        component: 'testComp'
      });

      //Removes # symbol for our routes
      $locationProvider.html5Mode(true);
    }
  ]);
