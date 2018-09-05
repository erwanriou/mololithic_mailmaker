const keys = {
  secret: process.env.SECRET_OR_KEY,
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_SECRET_OR_KEY,
  cookieKey: process.env.COOKIE_KEY,
  absoluteURI: process.env.URI,
  url : function() {
    return process.env.MONGO_URI
  },
  options : {
    useNewUrlParser: true,
  },
}

exports.keys = keys
