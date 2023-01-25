const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.urlencoded({extended:true}))
require('dotenv').config()

// connect api to front react
const cors = require('cors')
app.use(cors())
//

const usersRouter = require('./routes/usersRouter')
const articlesRouter = require('./routes/articlesRouter')
const commentsRouter = require('./routes/commentsRouter')

app.use('/api', usersRouter, articlesRouter, commentsRouter)

app.get('/', (req, res) => {
    res.send('index of my api').status(200)
})



const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, {useNewUrlParser: true})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error")) 

app.listen(8000, () => {
    console.log('my server running on port 8000')
})
