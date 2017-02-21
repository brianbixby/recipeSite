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
    $http.post('/api/auth', loginComp.user).then(function success(res) {
      Auth.saveToken(res.data.token);
      console.log('Token:', res.data.token)
      $location.path('/');
    }, function error(res) {
      console.log(data);
    });
  }
}

LoginCompCtrl.$inject = ['$http', '$location', 'Auth', 'UserService'];
