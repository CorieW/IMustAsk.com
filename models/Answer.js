const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Answer', answerSchema)