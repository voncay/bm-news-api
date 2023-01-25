const usersRouter = require('express').Router()
const Users = require('../models/users')
const users = require('../models/users')

usersRouter.get('/users', (req, res) => {
    Users
    .find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

usersRouter.post('/users', (req, res) => {
    Users
    .create(req.body)
    .then(newUser => res.json(newUser))
    .catch(err => res.json(err))
})

usersRouter.get('/users/:id', (req, res) =>{
    Users
    .findOne({_id : req.params.id})
    .then(oneUser => res.json(oneUser))
    .catch(err => res.json(err))
})

usersRouter.put('/users/:id', async (req, res) => {
    await Users.findOne({_id : req.params.id})
    await Users.updateOne({$set : req.body})
    await Users.findOne({_id : req.params.id})
    .then(newUser => res.json(newUser))
    .catch(err => res.json(err))
})


usersRouter.delete('/users/:id', (req, res) => {
    Users
    .deleteOne({_id : req.params.id})
    .then(() => res.json('User deleted sucessfully'))
    .catch(err => res.json(err))
})



module.exports = usersRouter
