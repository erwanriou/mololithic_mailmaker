const keys = {
  secret: process.env.SECRET_OR_KEY,
  googleClientId: process.env.GOOGLE_CLIENTID,
  googleSecret: process.env.GOOGLE_SECRET_OR_KEY,
  url : function() {
    return process.env.MONGO_URI
  },
  options : {
    useNewUrlParser: true,
  },
}

exports.keys = keys
