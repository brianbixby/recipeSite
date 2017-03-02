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
      },
  };
}]);

// ApiService.set(yourSharedData);
// $scope.desiredLocation = ApiService.get();

    // apiRequest: function(params) {
    //   var URL ='/api/results';
    //   console.log('api-req: ', params);
    //   var req = {
    //     url: URL,
    //     method: "GET",
    //     data: params
    //   };
    //   return $http(req).then(function(res) {
    //     if(res.status !== 200) {
    //       console.log("couldn't make api req");
    //       return false;
    //     }
    //     console.log("Api req response: ", res.data);
    //     return res.data;
    //   }, function error(res) {
    //     console.log("error response:", res);
    //   });
    // },
