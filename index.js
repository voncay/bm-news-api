const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))

// Read .env files
require('dotenv').config()

// connect api to front react
const cors = require('cors')
app.use(cors())

// Import Data models
const usersRouter = require('./routes/usersRouter')
const articlesRouter = require('./routes/articlesRouter')
const commentsRouter = require('./routes/commentsRouter')

// Apply Data routes to server /api route
app.use('/api', usersRouter, articlesRouter, commentsRouter)

// Send 
app.get('/', (req, res) => {
  res.send('Api root root').status(200)
})

//// Connect to mongodb Atlas

// const mongoose = require('mongoose');

// mongoose.connect(`mongodb+srv://username:password@cluster-name.mongodb.net/dbname`,
// { useNewUrlParser: true, useUnifiedTopology: true }
// );

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("Connected to MongoDB Atlas");
// });


// Connect to mongodb
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, {useNewUrlParser: true})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"))
db.once('open', () => { console.log("Connected to MongoDB Atlas") })

// Start server
app.listen(8000, () => {
  console.log('my server running on port 8000')
})
