const appData = [
  {
    path: '/page-one',
    linkTitle: 'Page One',
    pageTitle: 'Some Page One',
    pageDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    table: {
      apiEndpoint: 'table-one',
      columns: [
        { title: 'Name' },
        { title: 'Email' },
        { title: 'Age' },
        { title: 'Height' }
      ]
    }
  },
  {
    path: '/page-two',
    linkTitle: 'Page Two',
    pageTitle: 'Some Page Two',
    pageDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    table: {
      apiEndpoint: 'table-two',
      columns: [
        { title: 'Name' },
        { title: 'Email' },
        { title: 'Age' },
        { title: 'Height' },
        { title: 'Address' }
      ]
    }
  },
  {
    path: '/page-three',
    linkTitle: 'Page Three',
    pageTitle: 'Some Page Three',
    pageDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    table: {
      apiEndpoint: 'table-three',
      columns: [
        { title: 'Name' },
        { title: 'Email' },
        { title: 'Age' },
        { title: 'Height' },
        { title: 'Profession' },
        { title: 'Address' }
      ]
    }
  }
]

const tableOneData = [
  {
    name: 'Fred Hoy',
    email: 'freddiehoy0@gamil.com',
    age: 25,
    height: 6.3
  },
  {
    name: 'Jeff',
    email: 'jeff@notarealemail.com',
    age: 30,
    height: 6
  }
]

const tableTwoData = [
  {
    name: 'Fred Hoy',
    email: 'freddiehoy0@gamil.com',
    age: 25,
    height: 6.3,
    address: '10 Long Road'
  },
  {
    name: 'Jeff',
    email: 'jeff@notarealemail.com',
    age: 30,
    height: 6,
    address: '20 Small Avenue'
  },
  {
    name: 'Anna',
    email: 'anna@notarealemail.com',
    age: 28,
    height: 6,
    address: '30 Round Street'
  },
  {
    name: 'Gregory',
    email: 'greg@notarealemail.com',
    age: 21,
    height: 7,
    address: '40 Tall Mews'
  }
]

const tableThreeData = [
  {
    name: 'Fred Hoy',
    email: 'freddiehoy0@gamil.com',
    age: 25,
    height: 6.3,
    profession: 'Software Engineer',
    address: '10 Long Road'
  },
  {
    name: 'Jeff',
    email: 'jeff@notarealemail.com',
    age: 30,
    height: 6,
    profession: 'pro swimmer',
    address: '20 Small Avenue'
  }
]

module.exports = {
  appData: appData,
  tableOneData: tableOneData,
  tableTwoData: tableTwoData,
  tableThreeData: tableThreeData
}
