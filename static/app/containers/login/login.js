angular.module('App')
.component('loginComp', {
  templateUrl: 'app/containers/login/login.html',
  controller: LoginCompCtrl,
  controllerAs: 'loginComp'
});

function LoginCompCtrl($http, $location, Auth, UserService, ApiService) {
  var loginComp = this;
  loginComp.user = {
    email: '',
    password: ''
  };

  $(document).ready(function(){
    ApiService.saveSearchParameters();
  });

  loginComp.userLogin = function() {
  UserService.login(loginComp.user).then(function(user) {
    if(user !== false) {
      $location.path('/');
    }
  });
};
}

LoginCompCtrl.$inject = ['$http', '$location', 'Auth', 'UserService', 'ApiService'];
