// angular.module('App')
// .factory('FavoriteService', ['$http', 'Auth', function($http, Auth) {
//   return {
//     createFavorite: function(params) {
//       var URL ='/api/favorites';
//       console.log('FAVORITE-params: ', params);
//       var req = {
//         url: URL,
//         method: "POST",
//         data: params
//       };
//       return $http(req).then(function(res) {
//         if(res.status !== 200) {
//           console.log("couldn't create favorite");
//           return false;
//         }
//         console.log("Favorite create response: ", res.data);
//         return res.data;
//       }, function error(res) {
//         console.log("error response:", res);
//       });
//     },
//   };
// }]);
