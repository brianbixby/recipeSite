angular.module('App')
.factory('FavoriteService', ['$http', 'Auth', function($http, Auth) {
  return {
    createFavorite: function(params) {
      var URL ='/api/users/:id';
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
        // console.log("req.data:", req.data);
        // console.log("error response:", res);
      });
    },
    deleteFavorite: function(params) {
      var URL ='/api/users/:id';
      var req = {
        url: URL,
        method: "DELETE",
        data: params
      };
      return $http(req).then(function(res) {
        if(res.status !== 200) {
          return false;
        }
        return res.data;
      }, function error(res) {
        // console.log("req.data:", req.data);
        // console.log("error response:", res);
      });
    },
    displayFavorite: function(params) {
      var URL ='/api/users/:id';
      var req = {
        url: URL,
        method: "GET",
        data: params
      };
      return $http(req).then(function(res) {
        if(res.status !== 200) {
          return false;
        }
        return res.data;
      }, function error(res) {
        // console.log("req.data:", req.data);
        // console.log("error response:", res);
      });
    },
  };
}]);
