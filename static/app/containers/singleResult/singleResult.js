angular.module('App')
.component('singleResultComp', {
  templateUrl: 'app/containers/singleResult/singleResult.html',
  controller: SingleResultCompCtrl,
  controllerAs: 'singleResultComp'
});

function SingleResultCompCtrl($http, $state, $location, Auth, UserService, FavoriteService, ApiService) {
  var singleResultComp = this;
  // singleResultComp.windUrl = window.location.href.split("/search").pop();
  // console.log('singleResultComp.windUrl: ', singleResultComp.windUrl );
  var queryString = '';
  var temp = '';
  singleResultComp.results = undefined;
  // singleResultComp.quotedWindUrl = '';
  // singleResultComp.newUrl = '';
  // singleResultComp.temp = '';
  // singleResultComp.newertemp = '';

  $(function(){
    queryString = ApiService.saveSearchParameters();
    console.log('queryString ', queryString);
    singleResultComp.search();
  });

  singleResultComp.search = function() {
    // singleResultComp.windUrl = window.location.href.split("/recipe?r=").pop();
    // singleResultComp.windUrl = decodeURIComponent(singleResultComp.windUrl);
    var hashIndex = queryString.indexOf('#');
    var leftSide = queryString.substring(0, hashIndex);
    console.log('leftSide', leftSide);
    var rightSide = queryString.substring(hashIndex + 1, queryString.length);
    console.log('rightSide', rightSide);
    temp = leftSide + '%23' + rightSide;
    console.log('temp', temp);

    var req = {
      url: 'https://api.edamam.com/search?r='+temp+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa',
      method: "GET",
    }

    $http(req).then(function success(res) {
      console.log("HTTP success:", res);
      if (res.data.Error === "Not found!") {
        singleResultComp.results = [];
      } else {
        singleResultComp.results = res.data;
        console.log(singleResultComp.results);
      }
    }, function failure(res) {
      singleResultComp.results = [];
      console.log("HTTP failed:", res);
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
