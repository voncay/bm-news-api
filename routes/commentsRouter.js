const commentsRouter = require('express').Router()
const Comments = require('../models/comments')
const comments = require('../models/comments')

commentsRouter.get('/comments', (req, res) => {
    Comments
    .find()
    .then(comments => res.json(comments))
    .catch(err => res.json(err))
})

commentsRouter.post('/comments', (req, res) => {
    Comments
    .create(req.body)
    .then(newComment => res.json(newComment))
    .catch(err => res.json(err))
})

module.exports = commentsRouter
