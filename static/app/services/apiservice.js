angular.module('App')
.factory('ApiService', ['$http', 'Auth', function($http, Auth) {
  var savedData = {};
  return {
    saveSearchParameters: function(data) {
      if(!data) {
        console.log('savedData ', savedData);
        return savedData;
      }
        savedData = data;
        console.log('savedData ', savedData);
        console.log('data ', data);
        return savedData;
    },
  };
}]);
