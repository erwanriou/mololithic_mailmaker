const FacebookStrategy = require('passport-facebook').Strategy
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
    new FacebookStrategy({
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      callbackURL: keys.facebook.callbackURL,
      profileFields: ['id', 'email', 'displayName', 'link', 'gender', 'photos'],
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value
      const existingUser = await User.findOne({ email: email })
      const user = await new User({
         oauthId: profile.id,
         email: email,
         name: profile.displayName,
         avatar: profile.photos[0].value
       })
       existingUser
         ? done(null, existingUser)
         : user.save() && done(null, user)
    })
  )
}
