const express = require('express')
const Question = require('../models/Question')

const router = express.Router()

router.post('/', (req, res) =>
{ // Todo
    
})

module.exports = router;

//* Information
//* - Loading all answers shouldn't be done at once, only a number of answers should load at one time.
//*   This is so too many answers can't overload this whole system.