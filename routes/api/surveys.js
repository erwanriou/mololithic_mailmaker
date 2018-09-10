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
router.post('/new', requireLogin, requireCredit, (req, res) => {
  const { errors, isValid } = validateSurveyInput(req.body)
  //Check Validation
  !isValid && res.status(400).json(errors)
})

module.exports = router
