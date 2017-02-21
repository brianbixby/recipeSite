angular.module('App')
.component('loginComp', {
  templateUrl: 'app/containers/login/login.html',
  controller: LoginCompCtrl,
  controllerAs: 'loginComp'
});

function LoginCompCtrl($http, $location, Auth, UserService) {
  var loginComp = this;
  loginComp.user = {
    email: '',
    password: ''
  };
  loginComp.userLogin = function() {
  UserService.login(loginComp.user).then(function(user) {
    console.log("login response: ", loginComp.user);
    if(user !== false) {
      $location.path('/');
    }
  });
};
}

LoginCompCtrl.$inject = ['$http', '$location', 'Auth', 'UserService'];
