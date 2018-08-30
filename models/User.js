const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create UserSchema
const UserSchema = new Schema({
  googleId: {
    type: String,
    default: null
  },
  email: {
    type: String,
    required: [true, 'email required'],
  },
  name: {
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
