const mongoose = require('mongoose')
const Answer = require('./Answer')

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: [ Answer.schema ],
    date: {
        type: Date,
        default: Date.now
    }
})

questionSchema.statics.findQuestion = async function (id)
{ // Returns the question that contains that ID
    return await this.findById(id)
}

questionSchema.methods.addAnswer = function (answer)
{ // Adds an answer to the question
    this.answers.push(answer)
}

module.exports = mongoose.model('Question', questionSchema)