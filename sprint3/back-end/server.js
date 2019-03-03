const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;
const Routes = require('./routes/routes')


// const bodyparser = require('body-parser')
// app.use(express.static('website'));
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.json());


const cors = require('cors')
app.use(cors())

app.use('/videos', Routes)


app.listen(8080, () => {
  console.log(`Listening on ${PORT}...`)
})

