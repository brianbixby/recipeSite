angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($http, $state, $location, Auth, UserService) {
  var homeComp = this;
  homeComp.searchTerm = '';
  homeComp.userInput = '';
  homeComp.results = undefined;
  homeComp.dict = {};
  homeComp.maxResults = 10;
  homeComp.minIngredients = 0;
  homeComp.allergy = '';
  homeComp.minCals = 0;
  homeComp.maxCals = 10000;
  homeComp.queryString = '';

  // homeComp.$watch('homeComp.searchTerm', function(newVal, oldVal) {
  //   homeComp.search();
  // });

  homeComp.multipleAdvancedSearchTerms = function($event) {
    $event.preventDefault();
    console.log('homeComp.userInput ', homeComp.userInput );
    homeComp.searchTerm = '';
    console.log('homeComp.searchTerm: ', homeComp.searchTerm);
    for (key in homeComp.dict) {
      if(homeComp.dict[key]) {
        homeComp.searchTerm += [key] + ', ';
      }
    }
    if(homeComp.userInput) {
      homeComp.searchTerm += homeComp.userInput + ', ';
    }
    console.log('homeComp.searchTerm: ', homeComp.searchTerm);
    homeComp.search(homeComp.allergy);
    // var formData = $("#advancedSearch-form").serialize();
    // console.log("formData:", formData);
    // homeComp.splittingFormData(formData);
  }

  // homeComp.splittingFormData = function(obj) {
  //   console.log('splittingformdatainput: ', obj);
  //   var string = '';
  //   while(obj.split('=true&')) {
  //     sting += obj.split('=true&')[0] + ', ';
  //     console.log('obj: ', obj);
  //   }
  //   if(obj.split('=true')) {
  //     sting += obj.split('=true')[0];
  //   }
  //   homeComp.searchTerm = string;
  //   homeComp.search();
  // }

  homeComp.search = function(obj) {
    console.log(obj);
    if(obj == '') {
      homeComp.queryString = '?q='+homeComp.searchTerm+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to='+homeComp.maxResults+'&calories=gte '+homeComp.minCals+',lte '+homeComp.maxCals+'';
      var req = {
        url: 'https://api.edamam.com/search'+homeComp.queryString,
        method: "GET",
      }
    }
    else {
      homeComp.queryString = '?q='+homeComp.searchTerm+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to='+homeComp.maxResults+'&calories=gte '+homeComp.minCals+',lte '+homeComp.maxCals+'&health='+homeComp.allergy+'';
      var req = {
        url: 'https://api.edamam.com/search'+homeComp.queryString,
        method: "GET",
      }
    }
    window.location = '/search'+homeComp.queryString;
  }
    // $http(req).then(function success(res) {
    //   console.log('max ingredients: ',homeComp.maxResults);
    //   console.log('search term: ', homeComp.searchTerm);
    //   console.log('homeComp.allergy: ', homeComp.allergy);
    //   console.log("HTTP success:", res);
    //   if (res.data.Error === "Not found!") {
    //     homeComp.results = [];
    //   } else {
    //     homeComp.results = res.data.hits;
    //     console.log(homeComp.results);
    //     console.log('results length: ', homeComp.results.length);
    //   }
    // }, function failure(res) {
    //   homeComp.results = [];
    //   console.log("HTTP failed:", res);
    // });

  homeComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };
}

HomeCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService'];
