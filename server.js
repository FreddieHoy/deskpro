const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

const pageOne = {
  path: '/page-a',
  linkTitle: 'Page A',
  pageTitle: 'Some Page A',
  pageDescription: 'ipsum dolor sit amet...',
  table: {
    apiEndpoint: '/page-a-data.json',
    columns: [{ title: 'Name' }, { title: 'Email' }, { title: 'Age' }]
  }
}

// create a GET route
app.get('/express_backend/pageone', (req, res) => {
  res.send({ body: pageOne })
})
