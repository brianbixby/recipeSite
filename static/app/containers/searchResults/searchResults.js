angular.module('App')
.component('searchResultsComp', {
  templateUrl: 'app/containers/searchResults/searchResults.html',
  controller: SearchResultsCompCtrl,
  controllerAs: 'searchResultsComp'
});

function SearchResultsCompCtrl($http, $state, $location, Auth, UserService, FavoriteService, ApiService) {
  var searchResultsComp = this;
  searchResultsComp.results = undefined;
  searchResultsComp.initialLoad = true;
  var queryString = '';
  var queryParams = '';

  searchResultsComp.search = function(queryString, queryParams) {
    console.log('queryString ', queryString);
    console.log('queryParams ', queryParams);
      var req = {
        url: 'api/results/recipes?queryString='+queryString+queryParams+'',
        method: "GET",
        data: {
          queryString: queryString,
          queryParams: queryParams,
        },
      }
      $http(req).then(function success(res) {
        if (res.data.Error === "Not found!") {
          searchResultsComp.results = [];
        } else {
          searchResultsComp.results = res.data.hits;
        }
        return searchResultsComp.results;
      }, function failure(res) {
        searchResultsComp.results = [];
      });
    }

  $(function(){
    queryString = ApiService.saveSearchParameters().queryString;
    queryParams = ApiService.saveSearchParameters().queryParams;
    searchResultsComp.search(queryString, queryParams);
  });

  $(document).on('mouseenter', '.tile', function () {
      $(this).find(":button").show();
  }).on('mouseleave', '.tile', function () {
      $(this).find(":button").hide();
  });

  searchResultsComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };

  searchResultsComp.goToSingleResult = function(uri, label) {
    ApiService.saveSearchParameters(uri);
    $location.url('/recipe?r='+label);
  };

}

SearchResultsCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService', 'FavoriteService', 'ApiService'];
