const express = require('express')
const requireLogin = require('../../middlewares/requireLogin')
const requireCredit = require('../../middlewares/requireCredit')

const Mailer = require('../../services/Mailer')
const emailTemplate = require('../../services/emailTemplates/emailTemplate1')

const User = require('../../models/User')
const Survey = require('../../models/Survey')
const validateSurveyInput = require('../../validation/survey')

const router = express.Router()
// @route  Get /api/surveys/
// @desc   Feedback page
// @access public
router.get('/thanks', (req, res) => {
  res.send('Thanks for voting!')
})

// @route  Get /api/surveys/webhooks
// @desc   controle the webhooks request on sendgrid
// @access private
router.post('/webhooks', (req, res) => {
  console.log(req.body);
  res.send({})
})

// @route  Post /api/surveys/new
// @desc   Creating a new survey
// @access private
router.post('/new', requireLogin, requireCredit, async (req, res) => {
  const { errors, isValid } = validateSurveyInput(req.body)
  const { title, subject, body, recipients } = req.body
  //Check Validation
  !isValid && res.status(400).json(errors)
  const survey = new Survey({
    _user: req.user.id,
    title,
    subject,
    body,
    recipients: recipients
      .split(',')
      .map(email => ({ email: email.trim() }))
  })
  // Send email
  const mailer = new Mailer(survey, emailTemplate(survey))

  try {
    await mailer.send()
    await survey.save()
    req.user.credits -= 1
    const user = await req.user.save()
    res.send(user)
  } catch (err) {
    res.status(422).send(err)
  }
})

module.exports = router
