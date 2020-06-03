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
