const express = require('express')
const Question = require('../models/Question')

const router = express.Router()

router.post('/', (req, res) =>
{ // Todo
    Question.findOne({ _id: { $gt: curId } }).sort({ _id: 1 }, (err, res) =>
    {
        
    })
})

module.exports = router;