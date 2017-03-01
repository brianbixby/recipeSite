angular.module('App')
.component('singleResultComp', {
  templateUrl: 'app/containers/singleResult/singleResult.html',
  controller: SingleResultCompCtrl,
  controllerAs: 'singleResultComp'
});

function SingleResultCompCtrl($http, $state, $location, Auth, UserService, FavoriteService) {
  var singleResultComp = this;
  singleResultComp.windUrl = window.location.href.split("/search").pop();
  // console.log('singleResultComp.windUrl: ', singleResultComp.windUrl );
  singleResultComp.queryString = '';
  singleResultComp.results = undefined;
  singleResultComp.quotedWindUrl = '';
  singleResultComp.newUrl = '';
  singleResultComp.temp = '';
  singleResultComp.newertemp = '';

  $(document).ready(function(){
    singleResultComp.search();
  });

  singleResultComp.search = function() {
    singleResultComp.windUrl = window.location.href.split("/recipe?r=").pop();
    singleResultComp.windUrl = decodeURIComponent(singleResultComp.windUrl);
    var hashIndex = singleResultComp.windUrl.indexOf('#');
    var leftSide = singleResultComp.windUrl.substring(0, hashIndex);
    var rightSide = singleResultComp.windUrl.substring(hashIndex + 1, singleResultComp.windUrl.length);
    singleResultComp.windUrl = leftSide + '%23' + rightSide;

    var req = {
      url: 'https://api.edamam.com/search?r='+singleResultComp.windUrl+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa',
      method: "GET",
    }

    $http(req).then(function success(res) {
      // console.log("HTTP success:", res);
      if (res.data.Error === "Not found!") {
        singleResultComp.results = [];
      } else {
        singleResultComp.results = res.data;
        // console.log(singleResultComp.results);
      }
    }, function failure(res) {
      singleResultComp.results = [];
      // console.log("HTTP failed:", res);
    });
  }

  // singleResultComp.favorite = {
  //   name: '',
  //   uri: '',
  //   img: ''
  // };
  //
  // singleResultComp.addToFavorite = function(uri, label, img) {
  //   // console.log('uri', uri);
  //   // console.log('label', label);
  //   var params = {
  //     name: label,
  //     uri: uri,
  //     img: img,
  //   };
  //   FavoriteService.createFavorite(params).then(function(favorite) {
  //     if(favorite === false) {
  //       // console.log("favorite create error");
  //     } else {
  //       // console.log("got favorite");
  //       // $location.path('/');
  //     }
  //   });
  // };
  singleResultComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };

}

SingleResultCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService', 'FavoriteService'];
