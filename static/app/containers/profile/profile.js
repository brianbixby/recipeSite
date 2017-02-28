angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'profileComp'
});

function ProfileCompCtrl($http, $state, $location, Auth, UserService, FavoriteService) {
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
        console.log('favorite', favorite[0]);
        console.log('favorite.name', favorite[0].name);
        console.log('favorite.uri', favorite[0].uri);

        // $location.path('/');
      }
    });
  };
}

ProfileCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService', 'FavoriteService'];
