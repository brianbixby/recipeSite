angular.module('App')
.component('searchResultsComp', {
  templateUrl: 'app/containers/searchResults/searchResults.html',
  controller: SearchResultsCompCtrl,
  controllerAs: 'searchResultsComp'
});

function SearchResultsCompCtrl($http, $state, $location, Auth, UserService) {
  var searchResultsComp = this;

}

SearchResultsCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService'];
