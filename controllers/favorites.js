var express = require('express');
var User = require('../models/schemas');
var router = express.Router();

router.route('/').get(function(req, res) {
    Favorite.find(function(err, favorites) {
      if (err) return res.send(err);
      console.log('sending favorites', favorites);
      return res.send(favorites);
    });
  })
  .post(function(req, res) {
    Favorite.create(req.body, function(err, favorite) {
      if (err) return res.status(500).send(err);
      console.log('posting favorites', favorite);
      return res.send(favorite);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Favorite.findById(req.params.id, function(err, favorite) {
      if (err) return res.send(err);
      console.log('getting fav by id', favorite);
      return res.send(favorite);
    });
  })
  .delete(function(req, res) {
    Favorite.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.send(err);
      console.log('deleting fav by id', favorite);
      return res.send({ message: 'success' });
    });
  });

module.exports = router;
