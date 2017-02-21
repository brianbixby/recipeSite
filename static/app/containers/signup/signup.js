angular.module('App')
.component('signupComp', {
  templateUrl: 'app/containers/signup/signup.html',
  controller: SignupCompCtrl,
  controllerAs: 'signupComp'
});

function SignupCompCtrl($http, $location, UserService) {
  var signupComp = this;
  signupComp.user = {
    email: '',
    password: ''
  };
  signupComp.userSignup = function() {
    $http.post('/api/users', signupComp.user).then(function success(res) {
      $location.path('/');
    }, function error(res) {
      console.log(data);
    });
  }
}

SignupCompCtrl.$inject = ['$http', '$location', 'UserService'];
