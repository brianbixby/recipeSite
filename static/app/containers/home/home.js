angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($http, $state, $location, Auth, UserService) {
  var homeComp = this;
  // homeComp.searchTerm = '';
  // homeComp.userInput = '';
  // homeComp.results = undefined;
  // homeComp.dict = {};
  // homeComp.maxResults = 10;
  // homeComp.minIngredients = 0;
  // homeComp.allergy = '';
  // homeComp.minCals = 0;
  // homeComp.maxCals = 10000;
  // homeComp.queryString = '';
  //
  // homeComp.multipleAdvancedSearchTerms = function($event) {
  //   $event.preventDefault();
  //   homeComp.searchTerm = '';
  //   for (key in homeComp.dict) {
  //     if(homeComp.dict[key]) {
  //       homeComp.searchTerm += [key] + ', ';
  //     }
  //   }
  //   if(homeComp.userInput) {
  //     homeComp.searchTerm += homeComp.userInput + ', ';
  //   }
  //   homeComp.search(homeComp.allergy);
  // }
  //
  // homeComp.search = function(obj) {
  //   console.log(obj);
  //   if(obj == '') {
  //     homeComp.queryString = '?q='+homeComp.searchTerm+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to='+homeComp.maxResults+'&calories=gte '+homeComp.minCals+',lte '+homeComp.maxCals+'';
  //     var req = {
  //       url: 'https://api.edamam.com/search'+homeComp.queryString,
  //       method: "GET",
  //     }
  //   }
  //   else {
  //     homeComp.queryString = '?q='+homeComp.searchTerm+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to='+homeComp.maxResults+'&calories=gte '+homeComp.minCals+',lte '+homeComp.maxCals+'&health='+homeComp.allergy+'';
  //     var req = {
  //       url: 'https://api.edamam.com/search'+homeComp.queryString,
  //       method: "GET",
  //     }
  //   }
  //   window.location = '/search'+homeComp.queryString;
  // }

  homeComp.isLoggedIn = function() {
    return Auth.isLoggedIn();
  };

}

HomeCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService'];
