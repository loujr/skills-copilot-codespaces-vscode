// Create web server 

var express = require('express');
var router = express.Router();
var Comments = require('../models/comments');

// GET /comments
router.get('/', function(req, res, next) {
  Comments.find(function(err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

// POST /comments
router.post('/', function(req, res, next) {
  Comments.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// GET /comments/:id
router.get('/:id', function(req, res, next) {
  Comments.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// PUT /comments/:id
router.put('/:id', function(req, res, next) {
  Comments.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// DELETE /comments/:id
router.delete('/:id', function(req, res, next) {
  Comments.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;