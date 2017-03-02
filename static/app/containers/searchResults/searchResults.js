angular.module('App')
.component('searchResultsComp', {
  templateUrl: 'app/containers/searchResults/searchResults.html',
  controller: SearchResultsCompCtrl,
  controllerAs: 'searchResultsComp'
});

function SearchResultsCompCtrl($http, $state, $location, Auth, UserService, FavoriteService, ApiService) {
  var searchResultsComp = this;
  searchResultsComp.windUrl = window.location.href.split("/search").pop();
  console.log('searchResultsComp.windUrl: ', searchResultsComp.windUrl );
  searchResultsComp.results = undefined;
  searchResultsComp.initialLoad = true;
  var queryString = '';
  var queryParams = '';

  $(function(){
    queryString = ApiService.saveSearchParameters().queryString;
    queryParams = ApiService.saveSearchParameters().queryParams;
    searchResultsComp.search();
    console.log('queryParams ', queryParams);
    console.log('queryString ', queryString);
  });

  $(document).on('mouseenter', '.tile', function () {
      $(this).find(":button").show();
  }).on('mouseleave', '.tile', function () {
      $(this).find(":button").hide();
  });

  searchResultsComp.search = function() {
    // searchResultsComp.windUrl = window.location.href.split("/search").pop();
    // console.log('searchResultsComp.initialLoad: ', searchResultsComp.initialLoad);
    if(searchResultsComp.initialLoad == true) {
      console.log('true route');
      var req = {
        url: 'https://api.edamam.com/search'+queryString+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to='+queryParams+'',
        method: "GET",
      }
    } else {
      console.log('false route');
        var req = {
          url: 'https://api.edamam.com/search'+queryString+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to='+queryParams+'',
          method: "GET",
        }
    }

    $http(req).then(function success(res) {
      searchResultsComp.initialLoad = false;
      console.log("HTTP success:", res);
      if (res.data.Error === "Not found!") {
        searchResultsComp.results = [];
      } else {
        searchResultsComp.results = res.data.hits;
        console.log(searchResultsComp.results);
        console.log('results length: ', searchResultsComp.results.length);
      }
    }, function failure(res) {
      searchResultsComp.results = [];
      console.log("HTTP failed:", res);
    });
  }

  searchResultsComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };

  searchResultsComp.goToSingleResult = function(obj) {
    searchResultsComp.queryString = '?r='+obj+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa';
    window.location = '/recipe' + searchResultsComp.queryString;

  }

}

SearchResultsCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService', 'FavoriteService', 'ApiService'];
