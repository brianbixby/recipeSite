angular.module('App')
.controller('FavoriteCtrl', ['$scope', '$http', '$state', '$location', 'Auth', 'UserService', 'FavoriteService', 'ApiService',
    function($scope, $http, $state, $location, Auth, UserService, FavoriteService, ApiService) {
      $scope.addToFavorite = function(uri, label, img) {
        $scope.params = {
          name: label,
          uri: uri,
          img: img,
        };
        FavoriteService.createFavorite($scope.params).then(function(favorite) {
          if(favorite === false) {
            // console.log("favorite create error");
          } else {
            // console.log("got favorite");
            // $location.path('/');
          }
        });
      };
}]);
