const express = require('express')
const passport = require('passport')

const keys = require('../../config/keys').keys
const router = express.Router()

// @route  GET auth/google
// @desc   Register user with google Oauth
// @access private
router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }))

module.exports = router
