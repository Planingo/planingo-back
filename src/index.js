require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const { calendars, calendarById } = require('./Calendar/calendar')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/generateCalendar', async(req, res) => {
  res.send(await calendars())
})

app.post('/calendars', async(req, res) => {
  console.log(req.body)
  res.send(await calendarById(req.body.id))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
