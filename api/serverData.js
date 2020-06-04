const appData = [
  {
    path: '/page-one',
    linkTitle: 'Page One',
    pageTitle: 'Some Page One',
    pageDescription:
      'We take revenge during goat-yoga class. A herd of ladies arrive each Saturday, and Friday night we gorge ourselves like horses before a race. We watch, waiting for one moment: table pose. When they’re on all fours, we snap into action: climb up on their backs, pose for a picture, then release the coffee bean waterfall right into their highlighted hair. The group screams! We feign ignorance. Who else can dominate humans this way and go unpunished? Serving goat cheese with wine tonight, Brittany? Ok. But remember you’re about to go into downward dog, and none of us are housebroken',
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
      'ONE WINTER a Farmer found a Snake stiff and frozen with cold. He had compassion on it, and taking it up, placed it in his bosom. The Snake was quickly revived by the warmth, and resuming its natural instincts, bit its benefactor, inflicting on him a mortal wound. "Oh," cried the Farmer with his last breath, "I am rightly served for pitying a scoundrel."',
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
      'TWO FROGS dwelt in the same pool. When the pool dried up under the summer\'s heat, they left it and set out together for another home. As they went along they chanced to pass a deep well, amply supplied with water, and when they saw it, one of the Frogs said to the other, "Let us descend and make our abode in this well: it will furnish us with shelter and food." The other replied with greater caution, "But suppose the water should fail us. How can we get out again from so great a depth?"',
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
