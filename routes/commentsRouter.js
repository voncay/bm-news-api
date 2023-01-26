const commentsRouter = require('express').Router()
const Comments = require('../models/comments')
const comments = require('../models/comments')
express = require('express')
commentsRouter.use(express.json())

commentsRouter.get('/comments', (req, res) => {
    Comments
    .find()
    .populate('articleId')
    .then(comments => res.json(comments))
    .catch(err => res.json(err))
})

commentsRouter.post('/comments', (req, res) => {
    Comments
    .create(req.body)
    .then(newComment => res.json(newComment))
    .catch(err => res.json(err))
})

commentsRouter.get('/comments/:id', (req, res) =>{
    Comments
    .findOne({_id : req.params.id})
    .then(oneComment => res.json(oneComment))
    .catch(err => res.json(err))
})

commentsRouter.put('/comments/:id', async (req, res) => {
    await Comments.findOne({_id : req.params.id})
    await Comments.updateOne({$set : req.body})
    await Comments.findOne({_id : req.params.id})
    .then(newComment => res.json(newComment))
    .catch(err => res.json(err))
})


commentsRouter.delete('/comments/:id', (req, res) => {
    Comments
    .deleteOne({_id : req.params.id})
    .then(() => res.json('Comment deleted sucessfully'))
    .catch(err => res.json(err))
})


module.exports = commentsRouter
