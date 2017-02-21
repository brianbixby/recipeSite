var app = angular.module('App')
app.filter('noDecimal', function() {
  return function(input) {
    return input.toFixed(0);
  }
});
