const express = require('express')
const requireLogin = require('../../middlewares/requireLogin')
const requireCredit = require('../../middlewares/requireCredit')

const User = require('../../models/User')
const Survey = require('../../models/Survey')
const validateSurveyInput = require('../../validation/survey')

const router = express.Router()

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
  const newSurvey = await survey.save()
  res.json(newSurvey)
})

module.exports = router
