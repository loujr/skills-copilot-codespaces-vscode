// Create Web server

var express = require('express');
var router = express.Router();

// Load Comments Model
var Comments = require('../models/comments');

// Get all comments
router.get('/', function(req, res) {
    Comments.find({}, function(err, comments) {
        if (err) {
            console.log(err);
        } else {
            res.json(comments);
        }
    });
});

// Get one comment
router.get('/:id', function(req, res) {
    Comments.findById(req.params.id, function(err, comment) {
        if (err) {
            console.log(err);
        } else {
            res.json(comment);
        }
    });
});

// Create new comment
router.post('/', function(req, res) {
    var comment = new Comments({
        title: req.body.title,
        content: req.body.content,