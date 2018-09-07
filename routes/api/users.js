const express = require('express')
const passport = require('passport')
const gravatar = require('gravatar')

const User = require('../../models/User')
const keys = require('../../config/keys').keys
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

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

// @route  GET /api/users/Login
// @desc   Login from local session
// @access public
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

// @route  Post /api/users/register
// @desc   register users localy
// @access public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)
  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }
  //Check if user exist, then create
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists'
        return res.status(400).json(errors)
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // Size
          r: 'pg',  // Rating
          d: 'mm',  // Default
        })

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        })
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err))
      }
    })
})


module.exports = router
