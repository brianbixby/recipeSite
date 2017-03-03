var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/recipes', function(req, res) {
  // console.log('req', req);
  console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
  // console.log('req ', req);
  console.log('req.query.queryString ', req.query.queryString);
  console.log('req.query.queryParams ', req.query.queryParams);
  var queryString =  req.query.queryString;
  var queryParams =  req.query.queryParams;
  var url = 'https://api.edamam.com/search' + queryString + '&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to=10' + '';

  request(url, function(error, response, body) {
    res.send(body);
  });
});

// var req = {
//   url: 'https://api.edamam.com/search'+queryString+'&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to='+queryParams+'',
//   method: "GET",
// }


// router.get('/singlerecipe', function(req, res) {
//
//   var id = req.query.foodId;
//   var url = "https://api.nal.usda.gov/ndb/reports/?ndbno=" + id + "&type=b&format=json&api_key=voDReYpFIe0hJoOxgqqfGU28oUAf3Yp1HbsfOGEg";
//
//   request(url, function(error, response, body) {
//     res.send(body);
//   });
// });

module.exports = router;
