const express = require('express')
const Path = require('path-parser').default
const { URL } = require('url')
const _ = require('lodash')
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
  const p = new Path('/api/surveys/:surveyId/:choice')
  _.chain(req.body)
    .map(({ email, url }) => {
      const  match = p.test(new URL(url).pathname)
      if (match) return { email, ...match }
    })
    .compact()
    .uniqBy('email', 'surveyId')
    .each(({ surveyId, email, choice }) => {
      Survey.updateOne({
        _id: surveyId,
        recipients: {
          $elemMatch: { email: email, responded: false }
        }
      }, {
        $inc: { [choice]: 1 },
        $set: { 'recipients.$.responded': true }
      }).exec()
    })
    .value()
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
