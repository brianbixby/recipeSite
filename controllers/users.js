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
  });

router.get('/:id', function(req, res) {
  Models.User.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send(err);

    return res.send(user);
  });
});

router.route('/:id').post(function(req, res) {
  Models.User.findById(req.params.id, function(err, user) {
    user.favorites.push(req.body.favorite);
    user.save(function(err) {
        console.log(err);
        if (err) return res.status(500).send(err);
        res.send({'message': 'success'});
    });
  });
}).put(function(req, res) {
  Models.User.findByIdAndUpdate(req.params.id, {favorites: req.body.favorites}, function(err, user) {
    if (err) return res.status(500).send(err);
    res.send({'message': 'success'});
  });
});

module.exports = router;
