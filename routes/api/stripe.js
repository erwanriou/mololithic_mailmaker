const express = require('express')

const keys = require('../../config/keys').keys
const User = require('../../models/User')
const stripe = require('stripe')(keys.stripe.clientSecret)

const router = express.Router()

// @route  POST /api/stripe
// @desc   get the credit token from payment
// @access private
router.post('/', async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: 'EUR',
    description: 'Implementing credit to buy email campaign',
    source: req.body.id,
  })
  req.user.credits += 5
  const user = await req.user.save()
  res.send(user)
})

module.exports = router
