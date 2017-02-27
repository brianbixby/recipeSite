angular.module('App')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'profileComp'
});

function ProfileCompCtrl($http, $state, $location, Auth, UserService) {
  var profileComp = this;
  profileComp.profile = Auth.currentUser();
  var user_id = profileComp.profile.id;
}

ProfileCompCtrl.$inject = ['$http', '$state', '$location', 'Auth', 'UserService'];
