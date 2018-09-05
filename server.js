const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
const path = require('path')

// Import routes
const google = require('./routes/auth/google')
const users = require('./routes/api/users')

// Run Express
const app = express()

// Cookies config
const keys = require('./config/keys').keys

// DB config
const db = require('./config/keys').keys

// Middleware
app.use(cookieSession({ maxAge: 24 * 60 * 60 * 1000,  keys: [keys.cookieKey] }))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(function(req, res, next) {
        if (process.env.NODE_ENV === "production") {
            const reqType = req.headers["x-forwarded-proto"];
            // if not https redirect to https unless logging in using OAuth
            if (reqType !== "https") {
                req.url.indexOf("auth/google") !== -1
                  ? next()
                  : res.redirect("https://" + req.headers.host + req.url);
            }
        } else {
            next();
        }
    }); 
// Passport config
require('./services/passportGoogle')(passport)
require('./services/passportJwt')(passport)

// Connect to Mongodb
mongoose
  .connect(db.url(), db.options)
  .then(() => console.log('Mongodb Connected'))
  .catch(err => console.error(err))

// Use Routes
app.use('/auth/google', google)
app.use('/api/users', users)

// Production Setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Server Port
const port =  process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))
