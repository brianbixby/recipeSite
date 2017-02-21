var app = angular.module('App')
app.filter('showFirst', function() {
  return function(array) {
    return array[0];
  }
});
