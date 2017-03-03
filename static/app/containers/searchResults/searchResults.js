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
        // data: {
        //   queryString: queryString,
        //   queryParams: queryParams,
        // },
      }
      $http(req).then(function success(res) {
        console.log("HTTP success:", res);
        if (res.data.Error === "Not found!") {
          searchResultsComp.results = [];
        } else {
          console.log('res', res);
          searchResultsComp.results = res.data.hits;
          console.log(searchResultsComp.results);
          // console.log('results length: ', searchResultsComp.results.length);
        }
        console.log('searchResultsComp.results', searchResultsComp.results);
        return searchResultsComp.results;
      }, function failure(res) {
        searchResultsComp.results = [];
        console.log("HTTP failed:", res);
      });
    }

  $(function(){
    queryString = ApiService.saveSearchParameters().queryString;
    if(ApiService.saveSearchParameters().queryParams) {
      queryParams = ApiService.saveSearchParameters().queryParams;
    };
    console.log('queryParams ', queryParams);
    console.log('queryString ', queryString);
    searchResultsComp.search(queryString, queryParams);
    // console.log('queryParams ', queryParams);
    // console.log('queryString ', queryString);
  });
  console.log('queryParams out of iffe ', queryParams);
  console.log('queryString out of iffe', queryString);

  $(document).on('mouseenter', '.tile', function () {
      $(this).find(":button").show();
  }).on('mouseleave', '.tile', function () {
      $(this).find(":button").hide();
  });

  searchResultsComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };

  searchResultsComp.goToSingleResult = function(uri, label) {
    // searchResultsComp.queryString = '?r='+obj+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa';
    // window.location = '/recipe' + searchResultsComp.queryString;
    ApiService.saveSearchParameters(uri);
    $location.url('/recipe?r='+label);
  };

}

SearchResultsCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService', 'FavoriteService', 'ApiService'];
