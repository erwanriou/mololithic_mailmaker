const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys').keys

module.exports = passport => {
  passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken) => {
      console.log(accessToken)
    })
  )
}
