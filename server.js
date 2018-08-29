const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')

const app = express()

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())

// DB config
const db = require('./config/keys').keys

// Passport config
// require('./config/passportGoogle')(passport)
// require('./config/passportJwt')(passport)

// Connect to Mongodb
mongoose
  .connect(db.url(), db.options)
  .then(() => console.log('Mongodb Connected'))
  .catch(err => console.error(err))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Server Port
const port =  process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))
