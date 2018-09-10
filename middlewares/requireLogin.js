module.exports = (req, res, next) => {
  !req.user && res.status(401).json({ error: 'You must log in!' })
  next()
}
