const express = require('express')
const passport = require('passport')

const User = require('../../models/User')
const keys = require('../../config/keys').keys

const router = express.Router()

// @route  GET /api/users/user
// @desc   get the user data
// @access private
router.get('/user', (req, res) => {
  res.send(req.user)
})

// @route  GET /api/users/logout
// @desc   Log Out from oauth session
// @access private
router.get('/logout', (req, res) => {
  req.logout()
  res.json({ session: 'logout'})
})

module.exports = router
