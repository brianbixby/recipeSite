var app = angular.module('App')
app.filter('addButton', function() {
  return function(array) {
    array[0].innerHTML = "<a ng-click='all.isHidingOpen = !all.isHidingOpen' class='glyphicon glyphicon-play'> array[0]</a>";
    array[1].innerHTML = "<a ng-click='all.isHidingOpen = !all.isHidingOpen' class='glyphicon glyphicon-play'> array[1]</a>";
    return array;
  }
});
