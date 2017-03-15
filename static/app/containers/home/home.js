angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp',
});

function HomeCompCtrl($http, $state, $location, Auth, UserService, ApiService, $templateCache) {
  var homeComp = this;

  homeComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };
  var x = $templateCache.get('app/containers/home/home.html');
  console.log($templateCache.get());


}

HomeCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService', 'ApiService', '$templateCache'];
