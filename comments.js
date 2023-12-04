// Create Web server

const express = require('express');
const router = express.Router();

// Import comment model
const Comment = require('../models/comment');

// Import image model
const Image = require('../models/image');

// Import user model
const User = require('../models/user');

// Import passport
const passport = require('passport');

// Import authentication
const authentication = require('../authentication');

// Import multer
const multer = require('multer');

// Import cloudinary
const cloudinary = require('cloudinary');

// Import cloudinary storage
const storage = require('../cloudinaryStorage');

// Configure multer
const upload = multer({ storage: storage });

// Configure cloudinary
cloudinary.config({
    cloud_name: 'dofk2w5xg',
    api_key: '725978634558481',
    api_secret: 'jwUvKXHk2Bx8N7Xj3n4cUJnWfJk'
});

// GET request to get all comments
// http://localhost:5000/comments
router.get('/', (req, res, next) => {
    Comment.find({})
        .then((comments) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(comments);
        }, (err) => next(err))
        .catch((err) => next(err));
});

// POST request to add a comment
// http://localhost:5000/comments
router.post('/', authentication.verifyUser, (req, res, next) => {
    // Get the image id from the request body
    const imageId = req.body.imageId;

    // Get the comment from the request body
    const comment = req.body.comment;

    // Create a new comment object
    const newComment = {
        imageId: imageId,
        comment: comment,