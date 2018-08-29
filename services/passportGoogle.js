const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

const keys = require('../config/keys').keys
const User = mongoose.model('users')

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User
      .findById(id)
      .then( user => {
        done(null, user)
      })
  })

  passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
      User
        .findOne({ googleId: profile.id })
        .then( existingUser => {
          existingUser
            ? done(null, existingUser)
            : new User({ googleId: profile.id })
                .save()
                .then( user => done(null, user))
        })
        .catch(err => console.log(err))
    })
  )
}
