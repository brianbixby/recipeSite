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
        console.log('favorite', favorite);
      }
    });
  };
  profileComp.goToSingleResult = function(obj) {
    profileComp.queryString = '?r='+obj+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa';
    window.location = '/recipe' + profileComp.queryString;
  }
}

ProfileCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService', 'FavoriteService'];
