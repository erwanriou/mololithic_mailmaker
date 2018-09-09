const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
const requestIP = require('request-ip')

// Import routes
const google = require('./routes/auth/google')
const facebook = require('./routes/auth/facebook')
const users = require('./routes/api/users')
const stripe = require('./routes/api/stripe')

//import strategies
require('./services/passportGoogle')(passport)
require('./services/passportFacebook')(passport)
require('./services/passportLocal')(passport)

// Run Express
const app = express()

// Cookies config
const keys = require('./config/keys').keys

// DB config
const db = require('./config/keys').keys

// Connect to Mongodb
mongoose
  .connect(db.mongo.url(), db.mongo.options)
  .then(() => console.log('Mongodb Connected'))
  .catch(err => console.error(err))

// Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(requestIP.mw())

// Passport config
app.use(cookieSession({ maxAge: 24 * 60 * 60 * 1000,  keys: [keys.cookie.secret] }))
app.use(passport.initialize())
app.use(passport.session())

// Use Routes
app.use('/auth/google', google)
app.use('/auth/facebook', facebook)
app.use('/api/users', users)
app.use('/api/stripe', stripe)

// Production Setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
  })
}

// Server Port
const port =  process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))
