import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import PageOne from './components/pages/PageOne'
import PageTwo from './components/pages/PageTwo'
import NavBar from './components/common/Navbar'
import './App.css'

export const App = () => (
  <div>
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path="/PageTwo" component={PageTwo} />
        <Route path="/PageOne" component={PageOne} />
      </Switch>
    </HashRouter>
  </div>
)

export default App

// componentDidMount() {
//   // Call our fetch function below once the component mounts
//   this.callBackendAPI()
//     .then((res) => this.setState({ data: res.express }))
//     .catch((err) => console.log(err))
// }
// // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
// callBackendAPI = async () => {
//   const response = await fetch('/express_backend/page1')
//   const body = await response.json()
//   console.log(body)

//   if (response.status !== 200) {
//     throw Error(body.message)
//   }
//   return body
// }
