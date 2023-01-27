const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// // Connect to MongoDB Atlas
// const uri = 'mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority';
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// })


// Require models
const Article = require('../models/Article');
const User = require('../models/User');
const Comment = require('../models/Comment');

// Get all articles
router.route('/articles').get((req, res) => {
    Article.find()
        .populate('userId')
        .populate('comments')
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json({ message: err.message }));
});

// Get a single article by id
router.route('/articles/:id').get((req, res) => {
    Article.findById(req.params.id)
        .populate('userId')
        .populate('comments')
        .then(article => {
            if (!article) {
                return res.status(404).json({ message: 'Article not found' });
            }
            res.json(article);
        })
        .catch(err => res.status(400).json({ message: err.message }));
});

// Add a new article
router.route('/articles').post((req, res) => {
    Article.create(req.body)
        .then(newArticle => res.json(newArticle))
        .catch(err => res.status(400).json({ message: err.message }));
});

// Update an article by id
router.route('/articles/:id').put((req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .populate('userId')
        .populate('comments')
        .then(article => {
            if (!article) {
                return res.status(404).json({ message: 'Article not found' });
            }
            res.json(article);
        })
        .catch(err => res.status(400).json({ message: err.message }));
});

// Delete an article by id
router.route('/articles/:id').delete((req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Article deleted successfully' }))
        .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;
