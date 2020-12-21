const express = require('express')
const dotenv = require('dotenv')
// Todo: Cookie-parser? (Learn about it)

dotenv.config()

const db = require('./config/database')
const app = express()
const port = process.env.PORT || 3001

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Route Middlewares
app.use('/api/ask', require('./api/ask'))
app.use('/api/answer', require('./api/answer'))
app.use('/api/answers', require('./api/answers'))
app.use('/api/nextQuestion', require('./api/nextQuestion'))

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port)