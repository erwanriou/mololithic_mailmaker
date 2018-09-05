const keys = {
  secret: process.env.SECRET_OR_KEY,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_SECRET_OR_KEY,
  stripePublishableKey: process.env.STRIPE_CLIENT_ID,
  stripeSecretKey: process.env.STRIPE_SECRET_OR_KEY,
  cookieKey: process.env.COOKIE_KEY,
  url : function() {
    return process.env.MONGO_URI
  },
  options : {
    useNewUrlParser: true,
  },
}

exports.keys = keys
