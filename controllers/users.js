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
  // console.log('req.user.id', req.user.id);
  // console.log('req.body', req.body);
    Models.User.findByIdAndUpdate(req.user.id, {favorite: req.body}, function(err, user) {
      if (err) return res.status(500).send(err);
      // user.favorite.update()
      res.send({'message': 'success'});
    });
  }).delete(function(req, res) {
    Models.User.favorite.findByIdAndRemove(req.user.id + req.data, function(err, user) {
          if (err) return res.send(err);
          console.log('deleting fav by id', favorite);
          return res.send(favorite);
        });
    });

router.route('/:id')
  .post(function(req, res) {
  // console.log('req.user.id', req.user.id);
  // console.log('req.body', req.body);
      Models.User.findById(req.user.id, function(err, user) {
        user.favorite.push(req.body);
        user.save(function(err) {
            // console.log(err);
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
    // console.log('req.user.id', req.user.id);
    // console.log('req.body', req.body);
      Models.User.findByIdAndUpdate(req.user.id, {favorite: req.body}, function(err, user) {
        if (err) return res.status(500).send(err);
        // user.favorite.update()
        res.send({'message': 'success'});
      });
    }).delete(function(req, res) {
      Models.User.favorite.findByIdAndRemove((req.user.id + req.data), function(err) {
        console.log('req.data', req.data);
        console.log('req.body.data', req.body.data);
        console.log('req.user.id', req.user.id);
        if (err) return res.send(err);
        console.log('deleting fav by id', favorite);
      });
    });

module.exports = router;
