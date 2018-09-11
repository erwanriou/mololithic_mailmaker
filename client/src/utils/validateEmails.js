import validator from 'validator'

export const validateEmails = (emails) => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => !validator.isEmail(email))

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`
  }


}
