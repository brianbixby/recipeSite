var express = require('express');
var Models = require('../models/schemas');
var router = express.Router();

// creating a user
router.route('/')
  .get(function(req, res) {
    Models.User.find(function(err, users) {
      if (err) return res.status(500).send(err);
      return res.send(users);
    });
  })
  .post(function(req, res) {
    // find the user first in case the email already exists
    Models.User.findOne({ email: req.body.email }, function(err, user) {
      if (user) return res.status(400).send({ message: 'Email already exists' });
      Models.User.create(req.body, function(err, user) {
        if (err) return res.status(500).send(err);
        return res.send(user);
      });
    });
  }).put(function(req, res) {
    Models.User.findByIdAndUpdate(req.user.id, {favorite: req.body}, function(err, user) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

router.route('/:id')
  .post(function(req, res) {
      Models.User.findById(req.user.id, function(err, user) {
        user.favorite.push(req.body);
        user.save(function(err) {
            if (err) return res.status(500).send(err);
            res.send({'message': 'success'});
        });
      });
  }).get(function(req, res) {
      Models.User.findById(req.user.id, function(err, user) {
        if (err) return res.status(500).send(err);
        console.log('user.favorite', user.favorite);
        return res.send(user.favorite);
      });
    }).put(function(req, res) {
      Models.User.findByIdAndUpdate(req.user.id, {favorite: req.body}, function(err, user) {
        if (err) return res.status(500).send(err);
        res.send({'message': 'success'});
      });
    }).delete(function(req, res) {
      console.log();
      Models.User.findById(req.user.id, function(err, user) {
        if (err) return res.status(500).send(err);
          for(var i = 0; i < user.length; i++) {
            console.log("USERS: ", user[i].favorite);
          for(var j = 0; j < user[i].favorite.length; j++) {
            console.log("favorites: ", user[i].favorite[j]._id);
          if(user[i].favorite[j]._id == Object.keys(req.data)) {
           console.log("Found a match");
           user[i].favorite[j].remove({_id: Object.keys(req.query)[0] }, function(err) {
             if (err) console.log(err);
             console.log("DELETED!");
           })
         }
       }
     }
     user.save(function(err){
       if (err){
         res.send(err);
         }
         else {
           res.send('ok');
         }
       })
      });
    });
module.exports = router;
