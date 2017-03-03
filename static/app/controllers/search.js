angular.module('App')
.controller('SearchCtrl', ['$scope', '$http', '$state', '$location', 'Auth', 'UserService', 'ApiService',
    function($scope, $http, $state, $location, Auth, UserService, ApiService) {
      $scope.searchTerm = '';
      $scope.userInput = '';
      $scope.dict = {};
      $scope.maxResults = 10;
      $scope.allergy = '';
      $scope.minCals = 0;
      $scope.maxCals = 10000;
      $scope.queryString = '';
      $scope.params = '';

      $scope.multipleAdvancedSearchTerms = function($event) {
        $event.preventDefault();
        $scope.searchTerm = '';
        for (key in $scope.dict) {
          if($scope.dict[key]) {
            $scope.searchTerm += [key] + ', ';
          }
        }
        if($scope.userInput) {
          $scope.searchTerm += $scope.userInput + ', ';
        }
        $scope.search($scope.allergy);
      }

      $scope.search = function(obj) {
        if(obj == '') {
          $scope.params = $scope.maxResults+'&calories=gte '+$scope.minCals+',lte '+$scope.maxCals+'';
        }
        else {
          $scope.params = $scope.maxResults+'&calories=gte '+$scope.minCals+',lte '+$scope.maxCals+'&health='+$scope.allergy+'';
        }
        $scope.queryString = '?q='+$scope.searchTerm+'';
        var data = {
          queryString: $scope.queryString,
          queryParams: $scope.params,
        };
        ApiService.saveSearchParameters(data);
        $location.url('/search'+$scope.queryString+$scope.params);
        }
      }
]);
