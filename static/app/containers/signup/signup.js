angular.module('App')
.component('signupComp', {
  templateUrl: 'app/containers/signup/signup.html',
  controller: SignupCompCtrl,
  controllerAs: 'signupComp'
});

function SignupCompCtrl($http, $location, Auth, UserService) {
  var signupComp = this;
  signupComp.user = {
    email: '',
    password: ''
  };
  signupComp.userSignup = function() {
  // to implement
  var params = {
    email: signupComp.user.email,
    password: signupComp.user.password
  };
  UserService.createAccount(params).then(function(user) {
    if(user === false) {
      console.log("user create error");
    } else {
      console.log("got user: ", signupComp.user);
      $location.path('/');
    }
  });
  };
}

SignupCompCtrl.$inject = ['$http', '$location', 'Auth', 'UserService'];
