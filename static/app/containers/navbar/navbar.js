angular.module('App')
.component('navbarComp', {
  templateUrl: 'app/containers/navbar/navbar.html',
  controller: NavbarCompCtrl,
  controllerAs: 'navbarComp'
});

function NavbarCompCtrl(Auth) {
  var navbarComp = this;
  navbarComp.Auth = Auth;
  navbarComp.logout = function() {
    Auth.removeToken();
    console.log('My token:', Auth.getToken());
  }
}

NavbarCompCtrl.$inject = ['Auth'];
