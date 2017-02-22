var app = angular.module('App')
app.filter('makeChart', function() {
  return function(obj) {
    var pieData = [
        {
          value: obj[0],
          color:"#E15115"
        },
        {
          value : obj[1],
          color : "#FFC425"
        },
        {
          value : obj[2],
          color : "#83CC1C"
        }
      ];
    var myPie = new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(pieData,{percentageInnerCutout : 80});
  }
});
