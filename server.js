const express = require('express')
const app = express()


// code to delete soon
app.get('/', (req, res) => {
    res.send({ hi: 'there' })
})


// Server Port
const PORT =  process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${PORT}`))
