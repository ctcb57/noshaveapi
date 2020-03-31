const mongoose = require('mongoose')

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    post: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('BlogPost', blogPostSchema)