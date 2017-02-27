angular.module('App', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider)
      {

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
      .state('searchResultsState', {
        url: '/search?q&app_id&app_key&from&to&calories&health',
        component: 'searchResultsComp'
      })
      .state('singleResultState', {
        url: '/recipe?r&app_id&app_key',
        component: 'singleResultComp'
      })
      .state('profileState', {
        url: '/profile',
        component: 'profileComp'
      });
      //Removes # symbol for our routes
      $locationProvider.html5Mode(true);
    }
  ]);
