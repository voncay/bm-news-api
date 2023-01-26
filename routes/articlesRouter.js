const articlesRouter = require('express').Router()
const Articles = require('../models/articles')
const articles = require('../models/articles')

articlesRouter.get('/articles', (req, res) => {
    Articles
    .find()
    .populate('userId')
    .populate('comments')
    .then(articles => res.json(articles))
    .catch(err => res.json(err))
})

articlesRouter.post('/articles/', (req, res) => {
    Articles
    .create(req.body)
    .then(newArticle => res.json(newArticle))
    .catch(err => res.json(err))
})

articlesRouter.get('/articles/:id', (req, res) =>{
    Articles
    .findOne({_id : req.params.id})
    .then(oneArticle => res.json(oneArticle))
    .catch(err => res.json(err))
})

articlesRouter.put('/articles/:id', async (req, res) => {
    await Articles.findOne({_id : req.params.id})
    await Articles.updateOne({$set : req.body})
    await Articles.findOne({_id : req.params.id})
    .then(newArticle => res.json(newArticle))
    .catch(err => res.json(err))
})


articlesRouter.delete('/articles/:id', (req, res) => {
    Articles
    .deleteOne({_id : req.params.id})
    .then(() => res.json('Article deleted sucessfully'))
    .catch(err => res.json(err))
})

module.exports = articlesRouter
