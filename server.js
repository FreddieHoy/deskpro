const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

const appData = [
  {
    path: '/page-one',
    linkTitle: 'Page One',
    pageTitle: 'Some Page One',
    pageDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    path: '/page-two',
    linkTitle: 'Page Two',
    pageTitle: 'Some Page Two',
    pageDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    path: '/page-Three',
    linkTitle: 'Page Three',
    pageTitle: 'Some Page Three',
    pageDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  }
]

// create a GET routelink
app.get('/express_backend/appData', (req, res) => {
  res.send({ body: appData })
})

// table: {
//   apiEndpoint: '/page-a-data.json',
//   columns: [{ title: 'Name' }, { title: 'Email' }, { title: 'Age' }]
// }

const table = [
  ['name', 'fred', 'jonny'],
  ['height', '7feet', '4feet']
]
