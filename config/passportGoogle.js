const GoogleStrategy = require('passport-google-oauth20').Strategy

module.exports = passport => {
  passport.use(
    new GoogleStrategy()
  )
}
