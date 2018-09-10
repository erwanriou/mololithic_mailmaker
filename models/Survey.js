const mongoose = require('mongoose')
const RecipientSchema = require('./Recipient')
const Schema = mongoose.Schema

const SurveySchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  dateSent: {
    type: Date,
  },
  lastResponded: {
    type: Date,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Survey = mongoose.model('surveys', SurveySchema)
