const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

const cors = require('cors')
app.use(cors())

const videoRoutes = require('./routes/videos')

app.use('/videos', videoRoutes)

app.listen(8080, () => {
  console.log(`Listening on ${PORT}...`)
})