const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

// Create UserSchema
const UserSchema = new Schema({
  oauthId: {
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
  passwordHash: {
    type: String,
  },
  avatar: {
    type: String,
  },
  credits: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

UserSchema.plugin(uniqueValidator)

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash)
}

UserSchema.virtual("password").set(function(value) {
  this.passwordHash = bcrypt.hashSync(value, 12)
})

module.exports = User = mongoose.model('users', UserSchema)
