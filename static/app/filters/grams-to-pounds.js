var app = angular.module('App')
app.filter('pounds', function() {
  return function(grams) {
    return grams / 456;
  }
});
