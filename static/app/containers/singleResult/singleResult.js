angular.module('App')
.component('singleResultComp', {
  templateUrl: 'app/containers/singleResult/singleResult.html',
  controller: SingleResultCompCtrl,
  controllerAs: 'singleResultComp'
});

function SingleResultCompCtrl($http, $state, $location, Auth, UserService, FavoriteService, ApiService) {
  var singleResultComp = this;
  var queryString = '';
  var parsedQueryString = '';
  singleResultComp.results = undefined;

  singleResultComp.search = function(string) {
    console.log('string ', string);
    var hashIndex = string.indexOf('#');
    var leftSide = string.substring(0, hashIndex);
    var rightSide = string.substring(hashIndex + 1, string.length);
    parsedQueryString = leftSide + '%23' + rightSide;
    console.log('parsedQueryString', parsedQueryString);

    var req = {
      url: 'api/results/singlerecipe?queryString='+parsedQueryString+'',
      method: "GET",
    }

    $http(req).then(function success(res) {
      if (res.data.Error === "Not found!") {
        singleResultComp.results = [];
      } else {
        singleResultComp.results = res.data;
      }
      return singleResultComp.results;
    }, function failure(res) {
      singleResultComp.results = [];
    });
  }

  $(function(){
    queryString = '?r='+ApiService.saveSearchParameters();
    console.log('queryString ', queryString);
    singleResultComp.search(queryString);
  });

  singleResultComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };

  singleResultComp.instructions = function(obj) {
    window.location = obj;
  };

}

SingleResultCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService', 'FavoriteService', 'ApiService'];
