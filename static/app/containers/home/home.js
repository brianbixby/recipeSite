angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($http, $state, $location, Auth, UserService) {
  var homeComp = this;

  homeComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };

}

HomeCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService'];
