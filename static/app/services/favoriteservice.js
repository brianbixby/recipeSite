angular.module('App')
.factory('FavoriteService', ['$http', 'Auth', function($http, Auth) {
  return {
    createFavorite: function(params) {
      var URL ='/api/users/id';
      // console.log('FAVORITE-params: ', params);
      var req = {
        url: URL,
        method: "PUT",
        data: params
      };
      return $http(req).then(function(res) {
        if(res.status !== 200) {
          // console.log("couldn't create favorite");
          // console.log("req.data:", req.data);
          return false;
        }
        // console.log("Favorite create response: ", res.data);
        // console.log("req.data:", req.data);
        return res.data;
      }, function error(res) {
        // console.log("req.data:", req.data);
        // console.log("error response:", res);
      });
    },
  };
}]);
