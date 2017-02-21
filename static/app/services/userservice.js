angular.module('App')
.factory('UserService', ['$http', 'Auth', function($http, Auth) {
  return {
    createAccount: function(params) {
      var URL ='/api/users';
      console.log('SIGNUP-params: ', params);
      var req = {
        url: URL,
        method: "POST",
        data: params
      };
      return $http(req).then(function(res) {
        if(res.status !== 200) {
          console.log("couldn't create user");
          return false;
        }
        console.log("User create response: ", res.data);
        return res.data;
      }, function error(res) {
        console.log("error response:", res);
      });
    },
    login: function(params) {
      console.log('Login-params: ', params);
      var req = {
        url: '/api/auth',
        method: 'POST',
        data: params
      };
      return $http(req).then(function(res) {
        console.log("got network", res);
        Auth.saveToken(res.data.token);
        console.log("token: ", res.data.token);
        return res.data.user;
      });
    }
  };
}]);
