angular.module('App')
.factory('CacheService', ['$http', '$cacheFactory', 'Auth',  function($http, $cacheFactory, Auth) {
  var keys = [];
  var cache = $cacheFactory('cacheId');
  return {
      put: function(key, value) {
        console.log(key, value);
        if (angular.isUndefined(cache.get(key))) {
          keys.push(key);
        }
        cache.put(key, angular.isUndefined(value) ? null : value);
      }
    }
}]);
