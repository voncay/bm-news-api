const articlesRouter = require('express').Router()
const Articles = require('../models/articles')
const articles = require('../models/articles')

articlesRouter.get('/articles', (req, res) => {
    Articles
    .find()
    .populate('userId')
    .then(articles => res.json(articles))
    .catch(err => res.json(err))
})

articlesRouter.post('/articles', (req, res) => {
    Articles
    .create(req.body)
    .then(newArticle => res.json(newArticle))
    .catch(err => res.json(err))
})

module.exports = articlesRouter
