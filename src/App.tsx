import { HashRouter, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import NavBar from './components/Navbar'
import RoutedPage from './components/RoutedPage'
import { getPages } from './GetPages'

import './App.css'

const App = () => {
  const [appData, setAppData] = useState([])

  useEffect(() => {
    const getPageData = async () => {
      const pageData = getPages()
      setAppData(await pageData)
    }
    getPageData()
  }, [])

  console.log(appData)

  if (appData.length === 0)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )

  return (
    <HashRouter>
      <NavBar appData={appData} />
      <Switch>
        {appData.map((props) => (
          <RoutedPage {...props} />
        ))}
      </Switch>
    </HashRouter>
  )
}

export default App
