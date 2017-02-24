angular.module('App')
.controller('NavCtrl', ['$scope', '$state', 'Auth',
    function($scope, $state, Auth) {
      $scope.isLoggedIn = function() {
        return Auth.isLoggedIn();
  };
  $scope.logout = function() {
    Auth.removeToken();
  };
}]);

//
// $scope.favorites = [];
//
// Favorite.query(function success(data) {
//   $scope.favorites = data;
// }, function error(data) {
//   console.log(data);
// });
//
// $scope.deleteFavorite = function(id, favoritesIdx) {
//   Favorite.delete({ id: id }, function success(data) {
//     $scope.favorites.splice(favoritesIdx, 1);
//   }, function error(data) {
//     console.log(data);
//   });
// };
// }])
// .controller('ShowCtrl', ['$scope', '$stateParams', 'Favorite', function($scope, $stateParams, Favorite) {
// $scope.favorite = {};
//
// Favorite.get({ id: $stateParams.id }, function success(data) {
//   $scope.favorite = data;
// }, function error(data) {
//   console.log(data);
// });
// }])
