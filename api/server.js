const appData = require('./serverData.js').appData
const tableOneData = require('./serverData.js').tableOneData
const tableTwoData = require('./serverData.js').tableTwoData
const tableThreeData = require('./serverData.js').tableThreeData

const express = require('express')
const app = express()
const port = 5000

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

// Routes
app.get('/express_backend/appData', (req, res) => {
  res.send({ body: appData })
})

app.get('/express_backend/tables/table-one', (req, res) => {
  res.send({ body: tableOneData })
})

app.get('/express_backend/tables/table-two', (req, res) => {
  res.send({ body: tableTwoData })
})

app.get('/express_backend/tables/table-three', (req, res) => {
  res.send({ body: tableThreeData })
})
