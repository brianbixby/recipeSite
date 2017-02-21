var app = angular.module('App')
app.filter('percentage', function() {
  return function(input) {
    return (input*100).toFixed(0);
  }
});
