const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
const videoRoutes = require('./routes/videos.js')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
  if(req.path === '/videos') {
    console.log(new Date(), req.method, req.path)
    next()
  } else {
    console.log('Error!')
    res.status(403).send('NOT THE /VIDEOS PATH.')
  }
})

app.use('/videos', videoRoutes)

app.listen(8080, () => {
  console.log('Listening on port 8080...')
})