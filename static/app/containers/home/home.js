angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($http, $location, Auth, UserService) {
  var homeComp = this;
  homeComp.searchTerm = 'chicken';
  homeComp.results = undefined;
  // homeComp.$watch('searchTerm', function(newVal, oldVal) {
  //   homeComp.search();
  // });

  homeComp.search = function() {
    var req = {
      url: 'https://api.edamam.com/search?q='+homeComp.searchTerm+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa',
      method: "GET",
    }
    // 'https://api.edamam.com/search?q='+search+'&app_id=51aba909&app_key=9fcd3aa5746d2a423a350cee3ea4d57d',



    $http(req).then(function success(res) {
      console.log("HTTP success:", res);
      if (res.data.Error === "Movie not found!") {
        homeComp.results = [];
      } else {
        homeComp.results = res.data.hits;
        console.log(homeComp.results);
      }
    }, function failure(res) {
      homeComp.results = [];
      console.log("HTTP failed:", res);
    });
  }
  // $(document).ready(function () {
  //   var pieData = [
  //       {
  //         value: 35,
  //         color:"#E15115"
  //       },
  //       {
  //         value : 100-35,
  //         color : "#FFC425"
  //       },
  //       {
  //         value : 100-35,
  //         color : "#83CC1C"
  //       }
  //
  //     ];
  //
  //   var myPie = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(pieData,{percentageInnerCutout : 80});
  // });
}

HomeCompCtrl.$inject = ['$http', '$location', 'Auth', 'UserService'];
