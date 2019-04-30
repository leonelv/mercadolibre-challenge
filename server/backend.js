const express = require('express')
const compression = require('compression')
const helmet = require('helmet')

const api = require('./routes/api')

const app = express()

const PORT = process.env.PORT || 5000

app.use(compression())
app.use(helmet())

app.use('/api', api)

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`)
})
