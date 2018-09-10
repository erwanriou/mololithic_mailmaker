const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function  validateSurveyInput(data) {
  let errors = {}

  data.title = !isEmpty(data.title) ? data.title : ''
  data.subject = !isEmpty(data.subject) ? data.subject : ''
  data.body = !isEmpty(data.body) ? data.body : ''
  data.recipients = !isEmpty(data.recipients) ? data.recipients : ''

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required'
  }

  if (Validator.isEmpty(data.subject)) {
    errors.subject = 'Subject field is required'
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = 'Body field is required'
  }

  if (Validator.isEmpty(data.recipients)) {
    errors.recipients = 'Recipients field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
