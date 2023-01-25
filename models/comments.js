const mongoose= require('mongoose')
const Schema = mongoose.Schema

const commentsSchema = new Schema({
    author_name : { type: String, required: true },
    date : {type: Date, default: Date.now()},
    text: { type: String, required: true }
    
})

module.exports = mongoose.model('Comments', commentsSchema)