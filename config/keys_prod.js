const keys = {
  mongo: {
    url : function() {
      return process.env.MONGO_URI
    },
    options : {
      useNewUrlParser: true,
    },
  },
  cookie: {
    secret: process.env.COOKIE_KEY,
  },
  jwt: {
    secret: process.env.SECRET_OR_KEY,
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_OR_KEY,
    callbackURL: process.env.GOOGLE_CALLBACK,
  },
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_SECRET_OR_KEY,
    callbackURL: process.env.FACEBOOK_CALLBACK,
  },
  stripe: {
    clientID: process.env.STRIPE_CLIENT_ID,
    clientSecret: process.env.STRIPE_SECRET_OR_KEY,
  },
  sendgrid: {
    apiKey: process.env.SEND_GRID_KEY,
  }
}

exports.keys = keys
