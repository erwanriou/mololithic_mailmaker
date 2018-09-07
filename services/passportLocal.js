const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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
    new LocalStrategy({
      usernameField: 'email',
    },
    async (email, password, done) => {
      const user = await User.findOne({ email: email })
      !user && done(null, false, 'User Does not exist')
      bcrypt.compare(password, user.password, (err, res) => {
        err && done(null, false)
        !res ? done(null, false) : done(null, user)
      })
    })
  )
}
