module.exports = (req, res, next) => {
  req.user.credits < 1 && res.status(401).json({ error: 'You doesn\'t have enouth credits' })  
  next()
}
