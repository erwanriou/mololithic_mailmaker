const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

const app = express()

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())

// Passport config
require('./config/passportGoogle')(passport)
// require('./config/passportJwt')(passport)


// Server Port
const port =  process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))
