const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;
const Routes = require('./routes/routes')

const cors = require('cors')
app.use(cors())

app.use('/videos', Routes)

app.listen(8080, () => {
  console.log(`Listening on ${PORT}...`)
})

