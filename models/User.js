const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create UserSchema
const UserSchema = new Schema({
  googleId: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
})

module.exports = User = mongoose.model('users', UserSchema)
