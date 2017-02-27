var express = require('express');
var Models = require('../models/schemas');
var router = express.Router();

// creating a user
router.route('/')
  .get(function(req, res) {
    console.log('hi 1');
    Models.User.find(function(err, users) {
      if (err) return res.status(500).send(err);
      return res.send(users);
    });
  })
  .post(function(req, res) {
    console.log('hi 2');
    // find the user first in case the email already exists
    Models.User.findOne({ email: req.body.email }, function(err, user) {
      if (user) return res.status(400).send({ message: 'Email already exists' });
      Models.User.create(req.body, function(err, user) {
        if (err) return res.status(500).send(err);
        return res.send(user);
      });
    });
  })
  .put(function(req, res) {
    console.log('hi 6');
    Models.User.findByIdAndUpdate(req.user.id, function(err, user) {
      console.log('req.params.id', req.params.id);
      console.log('req.user.id', req.user.id);
      console.log('req.body', req.body);
      user.favorites.push(req.body);
      user.save(function(err) {
          console.log(err);
          if (err) return res.status(500).send(err);
          res.send({'message': 'success'});
      });
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });


    // Models.User.findByIdAndUpdate(req.params.id, {favorites: req.data}, function(err, user) {
    //   console.log('req.params.id', req.params.id);
    //   user.favorites.push(req.data);
    //   console.log('req.data', req.data);
    //   user.save(function(err) {
    //       console.log(err);
    //       if (err) return res.status(500).send(err);
    //       res.send({'message': 'success'});
    //   });
    // });
  });

router.get('/:id', function(req, res) {
  console.log('hi 3');
  Models.User.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send(err);
    return res.send(user);
  });
});

router.route('/:id').post(function(req, res) {
  console.log('hi 4');
  Models.User.findById(req.user.id, function(err, user) {
    user.favorites.push(req.body);
    user.save(function(err) {
        console.log(err);
        if (err) return res.status(500).send(err);
        res.send({'message': 'success'});
    });
  });
}).put(function(req, res) {
  console.log('hi 5');
  console.log('req.user.id', req.user.id);
  console.log('req.body', req.body);
  Models.User.findByIdAndUpdate(req.user.id, {favorite: req.body}, function(err, user) {
    if (err) return res.status(500).send(err);
    // user.favorite.update()
    res.send({'message': 'success'});
  });
});

// Models.User.create(req.body, function(err, user) {
//   if (err) return res.status(500).send(err);
//   return res.send(user);
// });

module.exports = router;

// Models.User.findByIdAndUpdate(req.user.id, function(err, user) {
//   console.log('req.params.id', req.params.id);
//   console.log('req.user.id', req.user.id);
//   console.log('req.body', req.body);
//   user.favorites.push(req.body);
//   user.save(function(err) {
//       console.log(err);
//       if (err) return res.status(500).send(err);
//       res.send({'message': 'success'});
//   });
//   if (err) return res.status(500).send(err);
//   res.send({'message': 'success'});
