const express = require('express')
const passport = require('passport')

const User = require('../../models/User')
const keys = require('../../config/keys').keys

const router = express.Router()

// @route  GET auth/google
// @desc   Register user with google Oauth
// @access Public
router.get('/', passport.authenticate('google', { 
  scope: ['profile', 'email']
}))

// @route  GET auth/google
// @desc   Login user with google Oauth
// @access Private
router.get('/callback', passport.authenticate('google'))

module.exports = router
