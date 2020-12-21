const express = require('express')
const Question = require('../models/Question')
const Answer = require('../models/Answer')

const router = express.Router()

router.post('/', async (req, res) =>
{
    const questionID = req.body.id
    const answer = req.body.answer

    if (answer.length == 0) return res.status(401).send('Answer can\'t be empty.')

    const question = await Question.findQuestion(questionID)
    
    if (question == null) return res.status(404).send('Question can\'t be found.')

    const answerEntry = new Answer({
        answer: answer
    })
    question.addAnswer(answerEntry)

    try {
        const savedQuestion = await question.save()
        res.status(200).send('Question has been answered!')
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router;