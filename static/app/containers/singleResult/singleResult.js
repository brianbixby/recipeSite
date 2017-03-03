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

  $(function(){
    queryString = ApiService.saveSearchParameters();
    console.log('queryString ', queryString);
    singleResultComp.search();
  });

  singleResultComp.search = function() {
    var hashIndex = queryString.indexOf('#');
    var leftSide = queryString.substring(0, hashIndex);
    var rightSide = queryString.substring(hashIndex + 1, queryString.length);
    parsedQueryString = leftSide + '%23' + rightSide;

    var req = {
      url: 'https://api.edamam.com/search?r='+parsedQueryString+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa',
      method: "GET",
    }

    $http(req).then(function success(res) {
      if (res.data.Error === "Not found!") {
        singleResultComp.results = [];
      } else {
        singleResultComp.results = res.data;
      }
    }, function failure(res) {
      singleResultComp.results = [];
    });
  }

  singleResultComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };

  singleResultComp.instructions = function(obj) {
    window.location = obj;
  };

}

SingleResultCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService', 'FavoriteService', 'ApiService'];
