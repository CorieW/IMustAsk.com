const express = require('express')
const Question = require('../models/Question')

const router = express.Router()

router.post('/', async (req, res) =>
{
    const question = req.body.question

    if (question.length == 0) return res.status(401).send('The question can\'t be empty.')

    const questionEntry = new Question({
        question: question
    })
    try {
        const savedQuestionEntry = await questionEntry.save()
        res.status(200).send('Question has been asked!')
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router;