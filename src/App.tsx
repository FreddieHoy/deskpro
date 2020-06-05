import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import NavBar from './components/Navbar'
import RoutedPage from './components/RoutedPage'
import { getPages } from './FetchData'
import { PageProps } from './components/RoutedPage'

import './App.css'

const App = () => {
  const [appData, setAppData] = useState<Array<PageProps> | null>(null)

  useEffect(() => {
    const getPagesData = async () => {
      const pageData = getPages()
      setAppData(await pageData)
    }
    getPagesData()
  }, [])

  if (!appData)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )

  return (
    <HashRouter>
      <NavBar appData={appData} />
      <Switch>
        <Route exact path="/">
          {appData && <Redirect to={appData[0].path} />}
        </Route>
        {appData.map((page) => (
          <RoutedPage key={page.path} {...page} />
        ))}
      </Switch>
    </HashRouter>
  )
}

export default App
