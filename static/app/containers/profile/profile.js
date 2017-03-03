angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'profileComp'
});

function ProfileCompCtrl($http, $state, $location, Auth, UserService, FavoriteService, ApiService) {
  var profileComp = this;
  profileComp.profile = Auth.currentUser();
  var user_id = profileComp.profile.id;

  $(document).ready(function(){
    profileComp.showUserFavorites();
  });

  profileComp.showUserFavorites = function() {
    FavoriteService.displayFavorite(user_id).then(function(favorite) {
      if(favorite === false) {
        console.log("favorite get error");
      } else {
        profileComp.favorite = favorite;
        // console.log('favorite', favorite);
      }
    });
  };

  profileComp.goToSingleResult = function(uri, name) {
    console.log('uri', uri);
    console.log('name', name);
    ApiService.saveSearchParameters(uri);
    $location.url('/recipe?r='+name);
  }

  profileComp.deleteFavorite = function(favId) {
    console.log('favId', favId);
    FavoriteService.deleteFavorite(favId).then(function(favorite) {
      if(favorite === false) {
        console.log("favorite delete error");
      } else {
        console.log("deleted favorite");
      }
    });
  };

}

ProfileCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService', 'FavoriteService', 'ApiService'];
