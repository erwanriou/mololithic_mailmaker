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
  },
  stripe: {
    ClientID: process.env.STRIPE_CLIENT_ID,
    ClientSecret: process.env.STRIPE_SECRET_OR_KEY,
  },
  facebook: {

  },
}

exports.keys = keys
