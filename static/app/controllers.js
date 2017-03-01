angular.module('App')
.controller('NavCtrl', ['$scope', '$state', 'Auth',
    function($scope, $state, Auth) {
      $scope.isLoggedIn = function() {
        return Auth.isLoggedIn();
      };
      $scope.logout = function() {
        Auth.removeToken();
      };
}])

.controller('SearchCtrl', ['$scope', '$http', '$state', '$location', 'Auth', 'UserService',
    function($scope, $http, $state, $location, Auth, UserService) {
      $scope.searchTerm = '';
      $scope.userInput = '';
      $scope.results = undefined;
      $scope.dict = {};
      $scope.maxResults = 10;
      $scope.minIngredients = 0;
      $scope.allergy = '';
      $scope.minCals = 0;
      $scope.maxCals = 10000;
      $scope.queryString = '';

      $scope.multipleAdvancedSearchTerms = function($event) {
        $event.preventDefault();
        $scope.searchTerm = '';
        for (key in $scope.dict) {
          if($scope.dict[key]) {
            $scope.searchTerm += [key] + ', ';
          }
          console.log('searchTerm', $scope.searchTerm);
        }
        if($scope.userInput) {
          $scope.searchTerm += $scope.userInput + ', ';
          console.log('userInput', $scope.userInput);
        }
        console.log('allergy', $scope.allergy);
        $scope.search($scope.allergy);
      }

      $scope.search = function(obj) {
        console.log('search input', obj);
        if(obj == '') {
          $scope.queryString = '?q='+$scope.searchTerm+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to='+$scope.maxResults+'&calories=gte '+$scope.minCals+',lte '+$scope.maxCals+'';
          var req = {
            url: 'https://api.edamam.com/search'+$scope.queryString,
            method: "GET",
          }
          console.log('querystring', $scope.queryString);
        }
        else {
          $scope.queryString = '?q='+$scope.searchTerm+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to='+$scope.maxResults+'&calories=gte '+$scope.minCals+',lte '+$scope.maxCals+'&health='+$scope.allergy+'';
          var req = {
            url: 'https://api.edamam.com/search'+$scope.queryString,
            method: "GET",
          }
          console.log('querystring', $scope.queryString);
        }
        window.location = '/search'+$scope.queryString;
      }
}]);
