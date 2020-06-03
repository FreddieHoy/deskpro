const serverData = require('./serverData.js')

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

// create a GET routelink
app.get('/express_backend/appData', (req, res) => {
  res.send({ body: serverData.appData })
})

app.get('/express_backend/tables/table-one', (req, res) => {
  res.send({ body: serverData.tableOneData })
})

app.get('/express_backend/tables/table-two', (req, res) => {
  res.send({ body: serverData.tableTwoData })
})

app.get('/express_backend/tables/table-three', (req, res) => {
  res.send({ body: serverData.tableThreeData })
})
