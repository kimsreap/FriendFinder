const express = require('express')
const { join } = require('path')
const connection = require('./config')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

connection.sync({ force: true })
  .then(_ => app.listen(3000))
  .catch(e => console.log(e))