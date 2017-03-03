angular.module('App')
.factory('UserService', ['$http', 'Auth', function($http, Auth) {
  return {
    createAccount: function(params) {
      var URL ='/api/users';
      var req = {
        url: URL,
        method: "POST",
        data: params
      };
      return $http(req).then(function(res) {
        if(res.status !== 200) {
          return false;
        }
        return res.data;
      }, function error(res) {
        // console.log("error response:", res);
      });
    },
    login: function(params) {
      var req = {
        url: '/api/auth',
        method: 'POST',
        data: params
      };
      return $http(req).then(function(res) {
        Auth.saveToken(res.data.token);
        return res.data.user;
      });
    },
  };
}]);
