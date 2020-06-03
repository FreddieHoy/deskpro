import { HashRouter, Switch } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import NavBar from './components/Navbar'
import RoutedPage from './components/RoutedPage'
import { getPages } from './GetPages'

import './App.css'

interface AppData {
  path: string
  linkTitle: string
  pageTitle: string
  pageDescription: string
  table: TableType
}

interface TableType {
  apiEndpoint: string
  columns: Array<TableColumnType>
}

interface TableColumnType {
  title: string
}

const App = () => {
  const [appData, setAppData] = useState<Array<AppData> | null>(null)

  useEffect(() => {
    const getPagesData = async () => {
      const pageData = getPages()
      setAppData(await pageData)
    }
    getPagesData()
  }, [])

  console.log(appData)

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
        {appData.map((page) => (
          <RoutedPage key={page.path} {...page} />
        ))}
      </Switch>
    </HashRouter>
  )
}

export default App
