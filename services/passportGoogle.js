const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys').keys

module.exports = passport => {
  passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken)
      console.log('refresh Token', refreshToken)
      console.log('profile', profile)
    })
  )
}
