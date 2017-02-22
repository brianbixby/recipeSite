var app = angular.module('App')
app.filter('addButton', function() {
  return function(array) {
    return array[0];
  }
});
