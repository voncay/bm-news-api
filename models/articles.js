const mongoose= require('mongoose')
const Schema = mongoose.Schema

const articlesSchema = new Schema({
    author_name : { type: String, required: true },
    title : { type: String, required: true },
    date : {type: Date, default: Date.now()},
    text: { type: String, required: true },
    userId: {
        type : mongoose.Schema.Types.ObjectId, ref : 'Users'
    }
})

module.exports = mongoose.model('Articles', articlesSchema)
