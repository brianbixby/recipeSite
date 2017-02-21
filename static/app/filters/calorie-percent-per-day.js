var app = angular.module('App')
app.filter('dailyCalPercent', function() {
  return function(calories) {
    return (calories / 20).toFixed(0);
  }
});
