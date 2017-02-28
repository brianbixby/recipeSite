var express = require('express');
var Models = require('../models/schemas');
var router = express.Router();
//
// router.route('/').get(function(req, res) {
//       Models.User.findById(req.data.user, function(err, user) {
//         if (err) return res.status(500).send(err);
//         console.log('req.data.user', req.data.user);
//         console.log('user.favorite', user.favorite);
//         return res.send(user.favorite);
//       });
//     });
    // Models.User.findById(req.user.id, function(err, user) {
    //   user.favorite.push(req.body);

//
//
//   .post(function(req, res) {
//     Models.Favorite.findOne({ uri: req.body.uri }, function(err, favorite) {
//       if (favorite) return res.status(400).send({ message: 'Favorite already exists' });
//
//     Models.Favorite.create(req.body, function(err, favorite) {
//       if (err) return res.status(500).send(err);
//       console.log('#################user');
//       console.log('posting favorites', favorite);
//       return res.send(favorite);
//     });
//   });
// });
//
// router.get('/:id', function(req, res) {
//   Models.Favorite.findById(req.params.id, function(err, favorite) {
//     if (err) return res.status(500).send(err);
//     console.log('finding fav by id', favorite);
//     return res.send(favorite);
//   });
// });
//
// router.route('/:id').post(function(req, res) {
//     Models.Favorite.findById(req.params.id, function(err, favorite) {
//       favorite.push(req.body.favorite);
//       favorite.save(function(err) {
//           console.log(err);
//           if (err) return res.status(500).send(err);
//           console.log('saving fav by id', favorite);
//           return res.send(favorite);
//       });
//     });
//   }).delete(function(req, res) {
//     Models.Favorite.findByIdAndRemove(req.params.id, function(err) {
//       if (err) return res.send(err);
//       console.log('deleting fav by id', favorite);
//       return res.send(favorite);
//     });
//   });
//
module.exports = router;
