var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/recipes', function(req, res) {
  var queryString =  req.query.queryString;
  var maxResults = req.query.maxResults
  var minCals = req.query.minCals
  var maxCals = req.query.maxCals
  var health = req.query.health
  if(health === undefined) {
    var queryParams = maxResults+'&calories=gte '+minCals+',lte '+maxCals+'';
  } else {
    var queryParams = maxResults+'&calories=gte '+minCals+',lte '+maxCals+'&health='+health+'';
  }
  var url = 'https://api.edamam.com/search' + queryString + '&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to=' + queryParams +'';
    request(url, function(error, response, body) {
      res.send(body);
    });
  });

module.exports = router;
