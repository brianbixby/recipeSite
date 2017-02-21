angular.module('App')
.component('navbarComp', {
  templateUrl: 'app/containers/navbar/navbar.html',
  controller: NavbarCompCtrl,
  controllerAs: 'navbarComp'
});

function NavbarCompCtrl($location, Auth, UserService) {
  var navbarComp = this;
  navbarComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };
  navbarComp.logout = function() {
    Auth.removeToken();
    $location.path('/login');
  };
}

NavbarCompCtrl.$inject = ['$location', 'Auth', 'UserService'];
