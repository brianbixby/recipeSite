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
